import { useInView } from "react-intersection-observer";

import Loader from "../Loader";
import { CharacterInfo } from "../../types";
import { CardsContainer, ErrorMessage, InfiniteScrollAnchor } from "./styles";
import Card from "../Card";
import { useEffect, useState } from "react";

const CardsView = ({
  status,
  errorStatus,
  characters,
  onPageEnd,
  defaultCharacter = null,
  onChangeCharacter,
}) => {
  const [selectedCharacter, setSelectedCharacter] = useState<null | number>(
    defaultCharacter,
  );
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      onPageEnd();
    }
  }, [inView]);

  return (
    <CardsContainer>
      {status === "pending" ? (
        <Loader />
      ) : status === "error" ? (
        <ErrorMessage>
          {errorStatus === 404
            ? "No results found."
            : "Oops, cannot retrive data :( Please try again."}
        </ErrorMessage>
      ) : (
        characters.map((character) => (
          <Card
            character={character}
            key={character.id}
            onClick={() => {
              setSelectedCharacter(character.id);
              onChangeCharacter(character.id);
            }}
          />
        ))
      )}
      <InfiniteScrollAnchor ref={ref}></InfiniteScrollAnchor>
    </CardsContainer>
  );
};

export default CardsView;
