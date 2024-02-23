import styled from "styled-components";

import SearchInput from "./SearchInput";
import SearchFilter from "./SearchFilter";

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vw;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
`;

const SearchPanel = () => {
  return (
    <Controls>
      <SearchInput />
      <SelectContainer>
        <SearchFilter title="Status" />
        <SearchFilter title="Species" />
        <SearchFilter title="Type" />
        <SearchFilter title="Gender" />
      </SelectContainer>
    </Controls>
  );
};

export default SearchPanel;
