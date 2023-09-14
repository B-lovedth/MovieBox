import { useQuery } from 'react-query';
import axios from 'axios';

export const useFetch = (url) => {
  const { data, isLoading, isError, error } = useQuery(url, async () => {
    const response = await axios.get(url);
    return response.data;
  }, {
    onError: (error) => {
      // Handle the error here
      console.error('An error occurred:', error);
    }
  });

  return { data, isLoading, isError, error };
};
