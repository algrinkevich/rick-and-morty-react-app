import { useInView } from "react-intersection-observer";

import Loader from "../Loader";
import { CharacterInfo } from "../../types";
import { CardsContainer, ErrorMessage, InfiniteScrollAnchor } from "./styles";
import Card from "../Card";
import { useEffect } from "react";

interface CardsViewProps {
  status: "pending" | "error" | "success";
  errorStatus?: number;
  characters: CharacterInfo[];
  onPageEnd: () => void;
  onChangeCharacter: (characterId: number) => void;
}

const CardsView = ({
  status,
  errorStatus,
  characters,
  onPageEnd,
  onChangeCharacter,
}: CardsViewProps) => {
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
              +onChangeCharacter(character.id);
            }}
          />
        ))
      )}
      {characters.length && (
        <InfiniteScrollAnchor ref={ref}></InfiniteScrollAnchor>
      )}
    </CardsContainer>
  );
};

export default CardsView;
