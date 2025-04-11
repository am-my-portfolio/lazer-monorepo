import { Observable } from 'rxjs';
import { Injectable, Logger, UnprocessableEntityException } from '@nestjs/common';
import { Ollama, OllamaEmbeddings, ChatOllama } from '@langchain/ollama';
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { Document } from "@langchain/core/documents";
import { Annotation, CompiledGraph, CompiledStateGraph, StateGraph } from "@langchain/langgraph";
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { RunnableMap, RunnablePassthrough, RunnableSequence } from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';

import { pull } from "langchain/hub";
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { formatDocumentsAsString } from "langchain/util/document";


@Injectable()
export class RagService {
  private readonly logger = new Logger(RagService.name);

  private readonly language_model_name = 'llama3.1'; // 'mistral
  private readonly embedding_model_name = 'mxbai-embed-large';
  private readonly base_url = 'http://ollama:11434';
  private readonly vector_store;
  private readonly llm;
  private readonly embeddings;
  private rag_app: CompiledGraph<any>;

  constructor() {
    // model: https://js.langchain.com/docs/integrations/llms/ollama/
    this.llm = new Ollama({ model: this.language_model_name, temperature: 0, baseUrl: this.base_url });

    // embeddings: https://js.langchain.com/docs/integrations/text_embedding/ollama/
    this.embeddings = new OllamaEmbeddings({
      model: this.embedding_model_name,
      baseUrl: this.base_url,
    });

    this.vector_store = new MemoryVectorStore(this.embeddings);
  }

  // Part 1: Indexing (Load/Split/Store)
  // https://js.langchain.com/docs/tutorials/rag/ 
  // Lets curry it???
  async handleIndexing(file: Express.Multer.File) {
    const text = await this.load(file);
    const docs = await this.splitAndStore(text);
    // const embeddings = await this.generateEmbeddings(tokens);
  }

  // https://js.langchain.com/docs/integrations/document_loaders/
  private async load(file: Express.Multer.File) {
    // console.log({ file });
    let loader;
    let text;
    if (file.mimetype === 'pdf') {
      // https://js.langchain.com/docs/how_to/document_loader_pdf/
      loader = new PDFLoader('src/document_loaders/example_data/example.pdf', {
        splitPages: false,
      });

      if (!loader) {
        throw new UnprocessableEntityException('Failed to load file contents');
      }

      console.log({ loader });
      const docs = await loader.load();
      console.log({ docs });

    } else if (file.mimetype === 'text/plain') {
      // https://js.langchain.com/docs/integrations/document_loaders/file_loaders/text/
      text = file.buffer.toString('utf-8');
    }

    // console.log({ text });
    if (!text) {
      throw new UnprocessableEntityException('Failed to load source contents');
    }

    return text;
  }

  private async splitAndStore(text: string) {
    const text_splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 0,
    });

    // const tokens = await textSplitter.splitText(text);
    // console.log({ tokens })

    try {
      const docs = await text_splitter.createDocuments([text]);
      console.log({ docs });
      await this.vector_store.addDocuments(docs);
      console.log('Documents added to vector store');
    } catch (e) {
      console.log({ e });
    }
  }

  // private async generateEmbeddings(tokens: string[]) {
  //   const embeddings = await this.embeddings.embedDocuments(tokens)
  //   console.log({ embeddings });
  //   return embeddings;
  // }

  // Part 2: Retrieval/Generation
  private async retriever() {
    // Define state for application
    const InputStateAnnotation = Annotation.Root({
      messages: Annotation<{
        role: string,
        content: string,
      }[]>,
      question: Annotation<string>,
    });
    const retrieve = async (state: typeof InputStateAnnotation.State) => {
      console.log({ state });
      const retrieved_docs = await this.vector_store.similaritySearch(state.messages[0].content);
      // console.log({ retrieved_docs });
      return { context: retrieved_docs };
    };

    return retrieve;
  }

  private async generater() {
    // Define prompt for question-answering
    const prompt_template = await pull<ChatPromptTemplate>("rlm/rag-prompt");

    // This has to match the parameters of the method called via the agent
    // e.g the agent.invoke(question) vs agent.stream({ messages: [{ role: "user", content: question }] })
    const StateAnnotation = Annotation.Root({
      messages: Annotation<{
        role: string,
        content: string,
      }[]>,
      question: Annotation<string>,
      context: Annotation<Document[]>,
      answer: Annotation<string>,
    });
    const generate = async (state: typeof StateAnnotation.State) => {
      const docs_content = state.context.map(doc => doc.pageContent).join("\n");
      // console.log({ docs_content });
      const messages = await prompt_template.invoke({ question: state.messages[0].content, context: docs_content });
      // console.log({ messages });
      const response = await this.llm.invoke(messages);
      // console.log({ response });
      return { answer: response };
    };

    return { StateAnnotation, generate };
  }

  private async buildRagAgent() {
    try {
      const retrieve = await this.retriever();
      const { StateAnnotation, generate } = await this.generater();

      // Compile application workflow/graph
      const graph = new StateGraph(StateAnnotation)
        .addNode("retrieve", retrieve)
        .addNode("generate", generate)
        .addEdge("__start__", "retrieve")
        .addEdge("retrieve", "generate")
        .addEdge("generate", "__end__");

      this.rag_app = graph.compile();
      console.log('RAG App ready');
    } catch (e) {
      console.log({ e });
    }
  }

  async invokeWithoutAgent() {
    const retriever = this.vector_store.asRetriever();
    const prompt = await pull<ChatPromptTemplate>("rlm/rag-prompt");
    const rag_chain_from_docs = RunnableSequence.from([
      RunnablePassthrough.assign({
        context: (input: any) => formatDocumentsAsString(input.context),
      }),
      prompt,
      this.llm,
      new StringOutputParser(),
    ]);
    let rag_chain_with_source = new RunnableMap({
      steps: { context: retriever, question: new RunnablePassthrough() },
    }).assign({ answer: rag_chain_from_docs });

    for await (const chunk of await rag_chain_with_source.stream(
      "What is task decomposition?"
    )) {
      console.log(chunk);
    }
  }

  // https://github.com/astrocodelp/langgraph-rag-example/blob/main/graph.ts
  // https://medium.com/@manojmukherjee777/advanced-retrieval-augmented-generation-rag-with-langchain-langgraph-and-ai-agents-588aab108abf
  // https://js.langchain.com/docs/concepts/rag/
  // https://js.langchain.com/docs/how_to/qa_streaming/
  // https://langchain-ai.github.io/langgraphjs/how-tos/stream-tokens
  // https://langchain-ai.github.io/langgraphjs/how-tos/streaming-from-final-node/
  async invokeRag(content: string): Promise<Observable<string>> {
    await this.buildRagAgent();

    return new Observable((subscriber) => {
      this.rag_app.stream(
        { messages: [{ role: "user", content }] },
        { streamMode: "messages" },
      )
        .then(async (response: any) => {
          // console.log(response);
          for await (const [message, _metadata] of response) {
            // console.log(message);
            subscriber.next(message.content);
          }
        })
        .catch((error: any) => {
          console.log(error);
          return subscriber.error(error);
        });
    });
  }

}


// sumarize
// reason
// sentiment analysis