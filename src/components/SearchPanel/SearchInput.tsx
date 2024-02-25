import styled from "styled-components";

import { Palette, Borders, Effects } from "../../style-variables";

const SearchContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
  width: 100%;

  @media (max-width: 639px) {
    width: 90%;
  }
`;

const SearchButton = styled.button`
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

const Search = styled.input`
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

  &::-webkit-search-cancel-button {
    display: none;
  }

  &:focus {
    outline: none;
    box-shadow:
      ${Effects.ActiveShadow},
      inset ${Palette.DarkGreen} 0px 0px 0px 2px;
  }
`;

const SearchInput = () => {
  return (
    <SearchContainer>
      <Search type="search" placeholder="Enter a name..." name="search" />
      <SearchButton
        className="fa-solid fa-magnifying-glass search-icon"
        title="Search"
      ></SearchButton>
    </SearchContainer>
  );
};

export default SearchInput;
