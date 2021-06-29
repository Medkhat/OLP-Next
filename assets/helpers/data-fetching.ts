import useSWR from "swr";
import axios from "axios";

export function useData(path: string) {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

  const { data, error } = useSWR(`${process.env.BASE_URL}/${path}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
