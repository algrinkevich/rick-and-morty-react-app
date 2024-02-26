import axios, { AxiosError } from "axios";
import {
  useInfiniteQuery,
  InfiniteData,
  QueryKey,
} from "@tanstack/react-query";
import { GetCharactersResponse, SearchFilters } from "../types";

const URL = "https://rickandmortyapi.com/api/character";

const useCharacters = (filters: SearchFilters) => {
  // { status, error, data, isFetchingNextPage, fetchNextPage }
  const queryUrl = `${URL}/?${toQueryString(filters)}`;
  return useInfiniteQuery<
    GetCharactersResponse,
    AxiosError,
    InfiniteData<GetCharactersResponse>,
    QueryKey,
    string
  >({
    queryKey: ["allCharacters", queryUrl],
    initialPageParam: queryUrl,
    queryFn: async ({ pageParam }) => {
      const { data } = await axios.get<GetCharactersResponse>(pageParam);
      return data;
    },
    getNextPageParam: (lastPage) => lastPage.info.next,
    retry: (failureCount, error) => {
      if (error.response?.status === 404) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

const toQueryString = (filters: SearchFilters) => {
  const clearedFilters: SearchFilters = {};
  for (const [k, v] of Object.entries(filters)) {
    if (v) {
      clearedFilters[k as keyof SearchFilters] = v;
    }
  }
  const searchParams = new URLSearchParams(clearedFilters);
  return searchParams.toString();
};

export default useCharacters;
