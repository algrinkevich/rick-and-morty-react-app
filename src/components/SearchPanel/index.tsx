import SearchInput from "./SearchInput/index.tsx";
import SearchFilter from "./SearchFilter/index.tsx";
import FilterOptions from "../../data/filters.ts";
import ClearButton from "./ClearButton/index.tsx";
import { SearchForm, SelectContainer } from "./styles.ts";

interface SearchPanelProps {
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

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
