import styled from "styled-components";

import SearchInput from "./SearchInput";
import SearchFilter from "./SearchFilter";
import FilterOptions from "../../data/filters.ts";

interface SearchPanelProps {
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 2rem auto 0 auto;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
`;

const SearchPanel = ({ onSearch }: SearchPanelProps) => {
  return (
    <SearchForm onSubmit={onSearch}>
      <SearchInput />
      <SelectContainer>
        <SearchFilter title="Status" options={FilterOptions.statuses} />
        <SearchFilter title="Species" options={FilterOptions.species} />
        <SearchFilter title="Type" options={FilterOptions.types} />
        <SearchFilter title="Gender" options={FilterOptions.genders} />
      </SelectContainer>
    </SearchForm>
  );
};

export default SearchPanel;
