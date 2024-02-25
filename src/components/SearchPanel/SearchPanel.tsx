import styled from "styled-components";

import SearchInput from "./SearchInput";
import SearchFilter from "./SearchFilter";
import FilterOptions from "../../data/filters.ts";
import ClearButton from "./ClearButton.tsx";

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

  @media (max-width: 639px) {
    width: 90%;
  }
`;

const SearchPanel = ({ onSearch }: SearchPanelProps) => {
  return (
    <SearchForm onSubmit={onSearch}>
      <SearchInput />
      <SelectContainer>
        <SearchFilter
          filterKey="status"
          title="Status"
          options={FilterOptions.statuses}
        />
        <SearchFilter
          filterKey="species"
          title="Species"
          options={FilterOptions.species}
        />
        <SearchFilter
          filterKey="type"
          title="Type"
          options={FilterOptions.types}
        />
        <SearchFilter
          filterKey="gender"
          title="Gender"
          options={FilterOptions.genders}
        />
        <ClearButton />
      </SelectContainer>
    </SearchForm>
  );
};

export default SearchPanel;
