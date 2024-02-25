import styled from "styled-components";

import { Borders, Palette, Sizes, Effects } from "../style-variables";
import { CharacterInfo } from "../App";

interface CardProps {
  character: CharacterInfo;
  onClick: () => void;
}

const CardWrapper = styled.figure`
  margin: 0;
  width: ${Sizes.CardWidth};
  height: 28rem;
  border-radius: ${Borders.BasicRadius};
  transition: all 0.3s ease-out;
  // TODO: rework shadow to be inset, reduce image size for that
  box-shadow: ${Palette.BasicColor} 0px 0px 0px 2px;
  border: 2px solid ${Palette.DarkGreen};
  overflow: hidden;

  &:hover {
    box-shadow:
      ${Effects.ActiveShadow},
      ${Palette.BasicColor} 0px 0px 0px 2px;
    cursor: pointer;
    transform: scale(1.05);
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
  background: repeating-linear-gradient(
    0deg,
    ${Palette.BasicColor}80,
    ${Palette.DarkGreen}80 3px
  );
  padding: 1rem;

  & > p {
    margin: 0 0 0.3rem 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${Palette.BasicColor};
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
