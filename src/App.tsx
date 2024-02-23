import styled from "styled-components";

import Header from "./components/Header";
import { Palette, Borders } from "./style-variables";

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  margin-block: 6vw 2rem;
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

  //&::-webkit-input-placeholder {}

  &::-webkit-search-cancel-button {
    display: none;
  }

  &:focus {
    outline: none;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
`;

const Select = styled.select`
  appearance: none;
  border: none;
  font-size: 1rem;
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

  & > option {
    background-color: ${Palette.BasicColor};
  }

  & :nth-child(1) {
    padding-top: 20px;
  }
`;

function App() {
  return (
    <>
      <Header />
      <Controls>
        <SearchContainer>
          <Search type="search" placeholder="Enter a name..." />
          <i
            className="fa-solid fa-magnifying-glass search-icon"
            title="Search"
          ></i>
        </SearchContainer>
        <SelectContainer>
          <Select>
            <option value="">Status</option>
            <option value="1">value 1</option>
            <option value="1">value 1</option>
            <option value="1">value 1</option>
            <option value="1">value 1</option>
            <option value="1">value 1</option>
            <option value="1">value 1</option>
          </Select>
          <Select>
            <option value="">Species</option>
          </Select>
          <Select>
            <option value="">Type</option>
          </Select>
          <Select>
            <option value="">Gender</option>
          </Select>
        </SelectContainer>
      </Controls>
    </>
  );
}

export default App;
