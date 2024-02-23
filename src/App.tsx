import styled from "styled-components";

import Header from "./components/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import { Borders, Palette, Sizes, Effects } from "./style-variables";

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${Sizes.CardWidth});
  grid-template-rows: auto;
  grid-gap: 2rem;
  margin: 3rem auto;
  width: 80%;
  justify-content: center;
`;

const Card = styled.figure`
  margin: 0;
  width: ${Sizes.CardWidth};
  height: 28rem;
  background-color: #fff;
  border-radius: ${Borders.BasicRadius};
  transition: box-shadow 0.3s ease-out;

  &:hover {
    box-shadow: ${Effects.ActiveShadow};
  }
`;

const CharacterImage = styled.img`
  display: block;
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const CharacterInfoBlock = styled.figcaption`
  height: 30%;
  background-color: ${Palette.BasicColor};
  padding: 1rem;
  border-bottom-left-radius: ${Borders.BasicRadius};
  border-bottom-right-radius: ${Borders.BasicRadius};

  & > p {
    margin: 0 0 0.3rem 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & p:first-child {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;
  }

  & span {
    font-weight: 700;
  }
`;

function App() {
  return (
    <>
      <Header />
      <SearchPanel />
      <CardsContainer>
        <Card>
          <CharacterImage src="/src/assets/rick.png" />
          <CharacterInfoBlock>
            <p>
              <span>Name: </span>Ricky kjbjbjh gbmgk gtkmlgkmt ogrog hbjhbjhbj
              bhjbhj
            </p>
            <p>
              <span>Status: </span>Alive
            </p>
            <p>
              <span>Gender: </span>Male
            </p>
          </CharacterInfoBlock>
        </Card>

        <Card>
          <CharacterImage src="/src/assets/rick.png" />
          <CharacterInfoBlock>
            <p>
              <span>Name: </span>Ricky kjbjbjh gbmgk gtkmlgkmt ogrog hbjhbjhbj
              bhjbhj
            </p>
            <p>
              <span>Status: </span>Alive
            </p>
            <p>
              <span>Gender: </span>Male
            </p>
          </CharacterInfoBlock>
        </Card>

        <Card>
          <CharacterImage src="/src/assets/rick.png" />
          <CharacterInfoBlock>
            <p>
              <span>Name: </span>Ricky kjbjbjh gbmgk gtkmlgkmt ogrog hbjhbjhbj
              bhjbhj
            </p>
            <p>
              <span>Status: </span>Alive
            </p>
            <p>
              <span>Gender: </span>Male
            </p>
          </CharacterInfoBlock>
        </Card>

        <Card>
          <CharacterImage src="/src/assets/rick.png" />
          <CharacterInfoBlock>
            <p>
              <span>Name: </span>Ricky kjbjbjh gbmgk gtkmlgkmt ogrog hbjhbjhbj
              bhjbhj
            </p>
            <p>
              <span>Status: </span>Alive
            </p>
            <p>
              <span>Gender: </span>Male
            </p>
          </CharacterInfoBlock>
        </Card>

        <Card>
          <CharacterImage src="/src/assets/rick.png" />
          <CharacterInfoBlock>
            <p>
              <span>Name: </span>Ricky kjbjbjh gbmgk gtkmlgkmt ogrog hbjhbjhbj
              bhjbhj
            </p>
            <p>
              <span>Status: </span>Alive
            </p>
            <p>
              <span>Gender: </span>Male
            </p>
          </CharacterInfoBlock>
        </Card>

        <Card>
          <CharacterImage src="/src/assets/rick.png" />
          <CharacterInfoBlock>
            <p>
              <span>Name: </span>Ricky kjbjbjh gbmgk gtkmlgkmt ogrog hbjhbjhbj
              bhjbhj
            </p>
            <p>
              <span>Status: </span>Alive
            </p>
            <p>
              <span>Gender: </span>Male
            </p>
          </CharacterInfoBlock>
        </Card>

        <Card>
          <CharacterImage src="/src/assets/rick.png" />
          <CharacterInfoBlock>
            <p>
              <span>Name: </span>Ricky kjbjbjh gbmgk gtkmlgkmt ogrog hbjhbjhbj
              bhjbhj
            </p>
            <p>
              <span>Status: </span>Alive
            </p>
            <p>
              <span>Gender: </span>Male
            </p>
          </CharacterInfoBlock>
        </Card>

        <Card>
          <CharacterImage src="/src/assets/rick.png" />
          <CharacterInfoBlock>
            <p>
              <span>Name: </span>Ricky kjbjbjh gbmgk gtkmlgkmt ogrog hbjhbjhbj
              bhjbhj
            </p>
            <p>
              <span>Status: </span>Alive
            </p>
            <p>
              <span>Gender: </span>Male
            </p>
          </CharacterInfoBlock>
        </Card>
      </CardsContainer>
    </>
  );
}

export default App;
