import { useEffect, useState, createContext } from "react";
import {
  useInfiniteQuery,
  DefaultError,
  InfiniteData,
  QueryKey,
} from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import Header from "./components/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import CharacterInfoPopup from "./components/CharacterInfoPopup";
import Card from "./components/Card";
import Loader from "./components/Loader";
import { Sizes } from "./style-variables";

export type SearchFilters = {
  name?: string;
  species?: string;
  status?: string;
  gender?: string;
  type?: string;
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

interface ISearchContext {
  filters: SearchFilters;
  setFilters: (value: SearchFilters) => void;
}

export const SearchContext = createContext<ISearchContext>({
  filters: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setFilters: (_: SearchFilters) => {
    return;
  },
});

export interface CharacterInfo {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}

interface GetCharactersResponse {
  results: CharacterInfo[];
  info: {
    pages: number;
    count: number;
    next: string | null;
    prev: string | null;
  };
}

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${Sizes.CardWidth});
  grid-template-rows: auto;
  grid-gap: 2rem;
  margin: 3rem auto;
  width: 80%;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ErrorMessage = styled.h2`
  color: #fff;
`;

function App() {
  const [filters, setFilters] = useState({});
  const queryUrl = `https://rickandmortyapi.com/api/character/?${toQueryString(filters)}`;
  const [selectedCharacter, setSelectedCharacter] = useState<null | number>(
    null,
  );

  const { status, data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery<
    GetCharactersResponse,
    DefaultError,
    InfiniteData<GetCharactersResponse>,
    QueryKey,
    string
  >({
    queryKey: ["allCharacters", queryUrl],
    initialPageParam: queryUrl,
    queryFn: async ({ pageParam }) => {
      const res = await fetch(pageParam);
      return (await res.json()) as GetCharactersResponse;
    },
    getNextPageParam: (lastPage) => lastPage.info.next,
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
            {"Oops, cannot retrive data :( Please try again"}
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
        {data?.pages.length && <span ref={ref}></span>}
      </CardsContainer>
      {isFetchingNextPage && <Loader />}
    </>
  );
}

export default App;
