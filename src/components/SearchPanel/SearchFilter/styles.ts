import styled from "styled-components";
import { blinkScreen } from "../../../styles/animations";
import { Palette, Borders } from "../../../styles/variables";

const selectArrowUrl = `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`;

export const Select = styled.select`
  appearance: none;
  border: 2px solid ${Palette.BasicColor};
  font-size: inherit;
  font-family: inherit;
  border-radius: ${Borders.BasicRadius};
  padding: 0.6rem 2rem 0.6rem 1.6rem;
  cursor: pointer;
  background-color: #ffffff00;
  background-image: ${selectArrowUrl},
    repeating-linear-gradient(0deg, ${Palette.SecondaryColor}, #000 3px);
  background-repeat: no-repeat;
  background-position:
    right 0.8rem center,
    0;
  background-size: 1rem, 100%;
  box-shadow: inset ${Palette.DarkGreen} 0px 0px 0px 2px;
  color: #fff;
  width: 9rem;
  transition: box-shadow 0.3s ease-out;

  &:focus {
    outline: none;
  }

  &:hover {
    animation: ${blinkScreen} 0.2s infinite;
  }

  &:active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > option {
    background-color: ${Palette.SecondaryColor};
    color: #fff;
  }
`;
