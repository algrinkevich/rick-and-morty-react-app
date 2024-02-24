import { useEffect } from "react";
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
import Card from "./components/Card";
import Loader from "./components/Loader";
import { Sizes } from "./style-variables";

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
  const { status, data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery<
    GetCharactersResponse,
    DefaultError,
    InfiniteData<GetCharactersResponse>,
    QueryKey,
    string
  >({
    queryKey: ["allCharacters"],
    initialPageParam: "https://rickandmortyapi.com/api/character",
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

  return (
    <>
      <Header />
      <SearchPanel />
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
              <Card character={character} key={character.id} />
            ))
        )}
        <span ref={ref}></span>
      </CardsContainer>
      {isFetchingNextPage && <Loader />}
    </>
  );
}

export default App;
