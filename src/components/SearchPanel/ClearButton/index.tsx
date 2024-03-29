import { useContext } from "react";

import { SearchContext } from "../../../contexts/Search";
import { ClearButtonWrapper } from "./styles";

const ClearButton = () => {
  const { setFilters } = useContext(SearchContext);

  return (
    <ClearButtonWrapper type="button" onClick={() => setFilters({})}>
      <span>x</span> Clear
    </ClearButtonWrapper>
  );
};

export default ClearButton;
