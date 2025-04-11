import { callExternalApi } from '@/http/index';
import { base_url } from '@/helpers/constants';

export const useChat = async (content: string, provider: 'ollama' | 'openai') => {
  const config = {
    url: `${base_url}/${provider}/completion`,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    data: {
      content,
    },
  };

  const { data } = await callExternalApi({ config });
  return data;
};
