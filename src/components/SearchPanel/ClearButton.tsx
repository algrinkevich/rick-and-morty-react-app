import { useContext } from "react";
import styled from "styled-components";

import { Borders, Palette } from "../../style-variables";
import { SearchContext } from "../../pages/Search";

const ClearButtonWrapper = styled.button`
  border-radius: ${Borders.BasicRadius};
  border: 2px solid ${Palette.BasicColor};
  box-shadow: inset ${Palette.DarkGreen} 0px 0px 0px 2px;
  font-size: inherit;
  font-family: inherit;
  color: #fff;
  padding: 0.6rem 1rem 0.6rem 1rem;
  transition: box-shadow 0.3s ease-out;
  background: repeating-linear-gradient(
    0deg,
    ${Palette.BasicColor}80,
    ${Palette.DarkGreen}80 3px
  );
  cursor: pointer;
`;

const ClearButton = () => {
  const { setFilters } = useContext(SearchContext);

  return (
    <ClearButtonWrapper onClick={() => setFilters({})}>
      X Clear
    </ClearButtonWrapper>
  );
};

export default ClearButton;
