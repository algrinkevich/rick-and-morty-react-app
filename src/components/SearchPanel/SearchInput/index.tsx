import { useContext } from "react";
import { SearchContext } from "../../../contexts/Search";
import { SearchContainer, Search, SearchButton } from "./styles";

const SearchInput = () => {
  const { filters } = useContext(SearchContext);

  return (
    <SearchContainer>
      <Search
        type="search"
        placeholder="Enter a name..."
        name="search"
        key={filters.name}
        defaultValue={filters.name}
      />
      <SearchButton
        className="fa-solid fa-magnifying-glass"
        title="Search"
      ></SearchButton>
    </SearchContainer>
  );
};

export default SearchInput;
