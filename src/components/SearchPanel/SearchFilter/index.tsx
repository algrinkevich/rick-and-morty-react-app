import { useContext } from "react";

import { SearchContext } from "../../../contexts/Search";
import { SearchFilters } from "../../../types";
import { Select } from "./styles";

interface SearchFilterProps {
  title: string;
  options: string[];
  filterKey: keyof SearchFilters;
}

const SearchFilter = ({ title, options, filterKey }: SearchFilterProps) => {
  const { filters, setFilters } = useContext(SearchContext);

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
