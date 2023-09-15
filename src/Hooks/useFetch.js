import { useQuery } from 'react-query';
import axios from 'axios';

export const useFetch = (url) => {
  const { data, isLoading, isError, error } = useQuery(url, async ({ signal }) => {
    try{
      const data =  await axios.get(url, { signal }).then((res) => res.data);
      return data
    }catch(error){
      throw new Error("Network Connection Error")
    }
  }, {
    useErrorBoundary:true,
  });

  return { data, isLoading, isError, error };
};