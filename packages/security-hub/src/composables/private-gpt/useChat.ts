import { useExternalApi } from '@/composables/useExternalApi';
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

  const { data } = await useExternalApi({ config });
  return data;
};
