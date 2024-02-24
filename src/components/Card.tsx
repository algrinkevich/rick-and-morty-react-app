import styled from "styled-components";

import { Borders, Palette, Sizes, Effects } from "../style-variables";

const CardWrapper = styled.figure`
  margin: 0;
  width: ${Sizes.CardWidth};
  height: 28rem;
  background-color: #fff;
  border-radius: ${Borders.BasicRadius};
  transition: box-shadow 0.3s ease-out;
  // TODO: rework shadow to be inset, reduce image size for that
  box-shadow: ${Palette.BasicColor} 0px 0px 0px 2px;
  border: 2px solid ${Palette.DarkGreen};
  overflow: hidden;

  &:hover {
    box-shadow:
      ${Effects.ActiveShadow},
      ${Palette.BasicColor} 0px 0px 0px 2px;
    cursor: pointer;
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
    ${Palette.BasicColor},
    ${Palette.DarkGreen} 3px
  );
  padding: 1rem;

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

const Card = () => {
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
};

export default Card;
