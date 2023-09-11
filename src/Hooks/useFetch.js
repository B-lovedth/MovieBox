import {useQuery} from 'react-query';
import axios from 'axios';

export const useFetch = (url) => {
    const {data, isLoading, isError} = useQuery(url, async () => {
        return await axios.get(url).then(res => res.data)
    })
    return {data, isLoading, isError}
}
