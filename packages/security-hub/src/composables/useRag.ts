
import { base_url } from '@/helpers/constants';
import { useExternalApi } from '@/composables/useExternalApi';

export const useRag = async (prompt: string) => {
  const config = {
    url: `${base_url}/rag/completion/${prompt}`,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  };

  const { data } = await useExternalApi({ config });
  return data;
};
