import { CharacterInfo } from "../../types";
import { CardWrapper, CharacterImage, CharacterInfoBlock } from "./styles";

interface CardProps {
  character: CharacterInfo;
  onClick: () => void;
}

const Card = ({ character, onClick }: CardProps) => {
  return (
    <CardWrapper onClick={onClick}>
      <CharacterImage src={character.image} />
      <CharacterInfoBlock>
        <p title={character.name}>
          <span>Name: </span>
          {character.name}
        </p>
        <p>
          <span>Status: </span>
          {character.status}
        </p>
        <p>
          <span>Gender: </span>
          {character.gender}
        </p>
      </CharacterInfoBlock>
    </CardWrapper>
  );
};

export default Card;
