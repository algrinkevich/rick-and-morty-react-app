import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios, { AxiosError } from "axios";
import {
  useInfiniteQuery,
  InfiniteData,
  QueryKey,
} from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import Header from "../../components/Header";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import CharacterInfoPopup from "../../components/CharacterInfoPopup";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import {
  CharacterInfo,
  GetCharactersResponse,
  SearchFilters,
} from "../../types";
import { SearchContext } from "../../contexts/Search";
import { CardsContainer, ErrorMessage, InfiniteScrollAnchor } from "./styles";

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

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const [filters, setFilters] = useState(searchParamsObject);
  const queryUrl = `https://rickandmortyapi.com/api/character/?${toQueryString(filters)}`;
  const [selectedCharacter, setSelectedCharacter] = useState<null | number>(
    searchParamsObject.character ? +searchParamsObject.character : null,
  );
  useEffect(() => {
    setSearchParams(filters);
  }, [filters, setSearchParams]);

  useEffect(() => {
    const newSearchParams = { ...searchParamsObject };
    if (selectedCharacter) {
      newSearchParams.character = `${selectedCharacter}`;
    } else {
      delete newSearchParams["character"];
    }
    setSearchParams(newSearchParams);
  }, [selectedCharacter, setSearchParams]);

  const { status, error, data, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery<
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
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.currentTarget.search.value;
    setFilters({ ...filters, name: searchValue });
  };

  return (
    <>
      <Header />
      <SearchContext.Provider value={{ filters, setFilters }}>
        <SearchPanel onSearch={handleSubmit} />
      </SearchContext.Provider>

      {selectedCharacter && (
        <CharacterInfoPopup
          id={selectedCharacter}
          key={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}

      <CardsContainer>
        {status === "pending" ? (
          <Loader />
        ) : status === "error" ? (
          <ErrorMessage>
            {error.response?.status === 404
              ? "No results found."
              : "Oops, cannot retrive data :( Please try again."}
          </ErrorMessage>
        ) : (
          data.pages
            .reduce(
              (acc, page) => [...acc, ...page.results],
              [] as CharacterInfo[],
            )
            .map((character) => (
              <Card
                character={character}
                key={character.id}
                onClick={() => setSelectedCharacter(character.id)}
              />
            ))
        )}
        {data?.pages.length && (
          <InfiniteScrollAnchor ref={ref}></InfiniteScrollAnchor>
        )}
      </CardsContainer>
      {isFetchingNextPage && <Loader />}
    </>
  );
}

export default Search;
