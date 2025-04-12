import { useExternalApi } from '@/composables/useExternalApi';
import { base_url } from '@/helpers/constants';

export const usePgptHealth = async () => {
  const config = {
    url: `${base_url}/health/pgpt`,
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  };

  const { data, error } = await useExternalApi({ config });
  console.log(data);
  return data;
};
