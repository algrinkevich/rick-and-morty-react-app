import styled from "styled-components";
import { blinkScreen } from "../../../styles/animations";
import { Borders, Palette } from "../../../styles/variables";

export const ClearButtonWrapper = styled.button`
  border-radius: ${Borders.BasicRadius};
  border: 2px solid ${Palette.BasicColor};
  box-shadow: inset ${Palette.DarkGreen} 0px 0px 0px 2px;
  font-size: inherit;
  font-family: inherit;
  color: #fff;
  padding: 0.6rem 2.3rem;
  transition: box-shadow 0.3s ease-out;
  background: repeating-linear-gradient(
    0deg,
    ${Palette.BasicColor}80,
    ${Palette.DarkGreen}80 3px
  );
  cursor: pointer;

  &:hover {
    animation: ${blinkScreen} 0.2s infinite;
  }
`;
