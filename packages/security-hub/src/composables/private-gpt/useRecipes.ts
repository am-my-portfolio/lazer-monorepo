import { AxiosRequestConfig } from 'axios';
import { OpenAI } from '@langchain/openai';
import { ChatAnthropic } from '@langchain/anthropic';
import { loadSummarizationChain } from 'langchain/chains';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { callExternalApi } from '@/http/index';

import CONFIG from '@/helpers/config';
import { base_url } from '@/helpers/constants';

export const useRecipes = () => {
  // Its not yet implemented !!! https://github.com/zylon-ai/privategpt-ts/pull/2
  // how to use this post endpoint? https://docs.privategpt.dev/api-reference/api-reference/recipes/summarize

  // Using api call, instead of the sdk
  const privateSummarize = async (file: File) => {
    console.debug('[privateSummarize]');

    if (file.type === 'text/plain') {
      const text = await file.text();

      const body = {
        text,
        prompt: 'summarize',
        use_context: false,
        stream: true,
        context_filter: undefined,
        instructions: '100 words',
      };

      console.log(body);
      const config: AxiosRequestConfig = {
        url: `${base_url}/v1/summarize`,
        method: 'POST',
        timeout: 5000,
        headers: {
          'content-type': 'application/json',
          'X-Fern-Language': 'JavaScript',
        },
        data: body,
      };

      const { data, error } = await callExternalApi({ config });
      console.log({ data, error });
      return data;
    }
  };

  // Summarization: https://js.langchain.com/docs/tutorials/summarization/
  // obsolete: https://js.langchain.com/v0.1/docs/use_cases/summarization/
  // This is NOT Private-gpt
  const summarizeWithOpenAI = async (file: File) => {
    // file.type values:
    // image/png
    // application/pdf
    // text/plain
    if (file.type === 'text/plain') {
      const text = await file.text();
      const { OPEN_AI_API_KEY } = CONFIG;

      const llm = new OpenAI({
        model: 'gpt-4o-mini',
        temperature: 0,
        // maxTokens: undefined,
        // timeout: undefined,
        // maxRetries: 2,
        apiKey: OPEN_AI_API_KEY,
      });
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
      });
      const docs = await textSplitter.createDocuments([text]);

      const chain = loadSummarizationChain(llm, { type: 'map_reduce' });
      const res = await chain.invoke({
        input_documents: docs,
      });
      return res;
    }
  };

  // https://langchain-ai.github.io/langgraphjs/how-tos/add-summary-conversation-history/#build-the-chatbot
  // This is NOT Private-gpt
  const summarizeWithAnthropic = async (file: File) => {
    // file.type values:
    // image/png
    // application/pdf
    // text/plain
    if (file.type === 'text/plain') {
      const text = await file.text();
      const { ANTHROPIC_API_KEY } = CONFIG;

      const llm = new ChatAnthropic({
        model: 'claude-3-5-sonnet-20240620',
        temperature: 0,
        apiKey: ANTHROPIC_API_KEY,
      });
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
      });
      const docs = await textSplitter.createDocuments([text]);

      const chain = loadSummarizationChain(llm, { type: 'map_reduce' });
      const res = await chain.invoke({
        input_documents: docs,
      });

      return res;
    }
  };

  return {
    privateSummarize,
    summarizeWithOpenAI,
    summarizeWithAnthropic,
  };
};
