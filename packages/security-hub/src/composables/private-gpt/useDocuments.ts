import { base_url } from '@/helpers/constants';

export const useDocuments = () => {
  const ingest = async (file: File) => {
    console.log({ base_url, file });
    try {
      // const instance = await PrivategptClient.getInstance(base_url);
      // const response = await instance.ingestion.ingestFile(file);
    } catch (e) {
      console.log(e);
    }
  };

  return { ingest };
};
