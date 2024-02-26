import styled from "styled-components";
import { blinkScreen } from "../../../styles/animations";
import { Palette, Borders, Effects } from "../../../styles/variables";

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
  width: 60%;

  @media (max-width: 639px) {
    width: 90%;
  }
`;
export const SearchButton = styled.button`
  position: absolute;
  right: 4%;
  top: 30%;
  font-size: 1.2rem;
  color: ${Palette.GreyColor};
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
`;
export const Search = styled.input`
  border-radius: ${Borders.BasicRadius};
  border: 2px solid ${Palette.BasicColor};
  box-shadow: inset ${Palette.DarkGreen} 0px 0px 0px 2px;
  font-size: inherit;
  font-family: inherit;
  color: #fff;
  padding: 0.8rem 3rem 0.8rem 1rem;
  width: 100%;
  transition: box-shadow 0.3s ease-out;
  background: repeating-linear-gradient(
    0deg,
    ${Palette.SecondaryColor},
    #000 3px
  );
  &:focus + ${SearchButton} {
    color: #fff;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &:focus {
    outline: none;
    box-shadow:
      ${Effects.ActiveShadow},
      inset ${Palette.DarkGreen} 0px 0px 0px 2px;
    animation: ${blinkScreen} 0.2s infinite;

    &::placeholder {
      color: transparent;
    }
  }
`;
