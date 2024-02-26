import { createContext } from "react";
import { ISearchContext, SearchFilters } from "../types";

export const SearchContext = createContext<ISearchContext>({
  filters: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setFilters: (_: SearchFilters) => {
    return;
  },
});
