import { callExternalApi } from '@/http/index';
import { base_url } from '@/helpers/constants';

export const useRag = async (prompt: string) => {
  const config = {
    url: `${base_url}/rag/completion/${prompt}`,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  };

  const { data } = await callExternalApi({ config });
  return data;
};
