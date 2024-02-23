import styled from "styled-components";

import { Palette, Borders, Effects } from "../../style-variables";

const SearchContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
  min-width: 30%;

  & .search-icon {
    position: absolute;
    right: 1.1rem;
    top: 1.1rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const Search = styled.input`
  border-radius: ${Borders.BasicRadius};
  border: 4px solid ${Palette.BasicColor};
  font-size: 1rem;
  font-family: inherit;
  padding: 0.8rem 2.3rem 0.8rem 1rem;
  width: 100%;
  transition: box-shadow 0.3s ease-out;

  //&::-webkit-input-placeholder {}

  &::-webkit-search-cancel-button {
    display: none;
  }

  &:focus {
    outline: none;
    box-shadow: ${Effects.ActiveShadow};
  }
`;

const SearchInput = () => {
  return (
    <SearchContainer>
      <Search type="search" placeholder="Enter a name..." />
      <i
        className="fa-solid fa-magnifying-glass search-icon"
        title="Search"
      ></i>
    </SearchContainer>
  );
};

export default SearchInput;
