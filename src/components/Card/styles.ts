import styled from "styled-components";
import { blinkScreen } from "../../styles/animations";
import { Borders, Palette, Effects } from "../../styles/variables";

export const CardWrapper = styled.figure`
  margin: 0;
  background: repeating-linear-gradient(
    0deg,
    ${Palette.BasicColor}80,
    ${Palette.DarkGreen}80 3px
  );
  border-radius: ${Borders.BasicRadius};
  transition: all 0.3s ease-out;
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

  &:hover {
    animation: ${blinkScreen} 0.2s infinite;
  }
`;

export const CharacterImage = styled.img`
  display: block;
`;

export const CharacterInfoBlock = styled.figcaption`
  padding: 1.2rem;

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
