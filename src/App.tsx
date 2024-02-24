import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import Header from "./components/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import Card from "./components/Card";
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

function App() {
  const { isPending, error, data } = useQuery<GetCharactersResponse>({
    queryKey: ["allCharacters"],
    queryFn: () =>
      fetch("https://rickandmortyapi.com/api/character").then((res) =>
        res.json(),
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Header />
      <SearchPanel />
      <CardsContainer>
        {data.results.map((character) => (
          <Card character={character} />
        ))}
      </CardsContainer>
    </>
  );
}

export default App;
