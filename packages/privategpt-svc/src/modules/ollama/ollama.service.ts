import { Observable } from 'rxjs';
import { Ollama } from '@langchain/ollama';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class OllamaChatService {
  private readonly logger = new Logger(OllamaChatService.name);
  private readonly llm;
  private readonly model_name;
  private readonly llm_server_url = 'http://ollama:11434';
  constructor() {
    this.model_name = 'llama3.1'; // 'mistral
    this.llm = new Ollama({ model: this.model_name, baseUrl: this.llm_server_url });
  }

  completion(content: string): Observable<string> {
    return new Observable((subscriber) => {
      this.llm
        .stream(content)
        .then(async (response) => {
          // console.log(response);
          for await (const part of response) {
            // console.log(part);
            subscriber.next(part);
          }
        })
        .catch((error) => {
          console.log(error);
          return subscriber.error(error);
        });
    });
  }

  // async summarizeText(text: string) {

  //   // Load the summarization chain
  //   const chain = loadSummarizationChain(this.llm, { type: "map_reduce" });

  //   // Run the chain to get the summary
  //   const result = await chain.call({
  //     input_documents: [
  //       {
  //         pageContent: text,
  //       },
  //     ],
  //   });

  //   return result.text;
  // }
}
