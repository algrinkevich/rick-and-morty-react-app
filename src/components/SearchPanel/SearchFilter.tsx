import styled from "styled-components";

import { Palette, Borders } from "../../style-variables";

interface SearchFilterProps {
  title: string;
}

const Select = styled.select`
  appearance: none;
  border: none;
  font-size: inherit;
  font-family: inherit;
  background-color: ${Palette.BasicColor};
  border-radius: ${Borders.BasicRadius};
  padding: 0.6rem 2rem 0.6rem 1.6rem;
  cursor: pointer;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 1rem;

  &:focus {
    outline: none;
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

const SearchFilter = ({ title }: SearchFilterProps) => {
  return (
    <Select>
      <option value="">{title}</option>
      <option value="1">value 1</option>
      <option value="1">value 1</option>
      <option value="1">value 1</option>
      <option value="1">value 1</option>
      <option value="1">value 1</option>
      <option value="1">value 1</option>
    </Select>
  );
};

export default SearchFilter;
