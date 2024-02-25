import { useContext } from "react";
import styled from "styled-components";

import { Palette, Borders } from "../../style-variables";
import { SearchContext, SearchFilters } from "../../App";

interface SearchFilterProps {
  title: string;
  options: string[];
  filterKey: keyof SearchFilters;
}

const Select = styled.select`
  appearance: none;
  border: 2px solid ${Palette.BasicColor};
  font-size: inherit;
  font-family: inherit;
  border-radius: ${Borders.BasicRadius};
  padding: 0.6rem 2rem 0.6rem 1.6rem;
  cursor: pointer;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e"),
    repeating-linear-gradient(0deg, ${Palette.SecondaryColor}, #000 3px);
  background-repeat: no-repeat;
  background-position:
    right 0.8rem center,
    0;
  background-size: 1rem, 100%;
  box-shadow: inset ${Palette.DarkGreen} 0px 0px 0px 2px;
  color: #fff;
  width: 9rem;

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

const SearchFilter = ({ title, options, filterKey }: SearchFilterProps) => {
  const { filters, setFilters } = useContext(SearchContext);
  console.log("filters: ", filters);

  return (
    <Select
      onChange={(e) => {
        setFilters({ ...filters, [title.toLowerCase()]: e.target.value });
      }}
      value={filters[filterKey] || title}
    >
      <option value="">{title}</option>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </Select>
  );
};

export default SearchFilter;
