import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import _ from "lodash";

import { SearchFilters } from "../types";

interface RickMortySearchParams {
  filters: SearchFilters;
  setFilters: (arg: SearchFilters) => void;
  selectedCharacter: number | null;
  setSelectedCharacter: (arg: number | null) => void;
}

const useRickMortySearchParams = (): RickMortySearchParams => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const [filters, setFilters] = useState(searchParamsObject);
  const defaultCharacter = searchParamsObject.character
    ? +searchParamsObject.character
    : null;
  const [selectedCharacter, setSelectedCharacter] = useState<null | number>(
    defaultCharacter,
  );
  const comparableFilters = JSON.stringify(filters);
  const comparableSearchFiltersParams = JSON.stringify(
    _.omit(searchParamsObject, ["character"]),
  );

  useEffect(() => {
    if (comparableFilters !== comparableSearchFiltersParams) {
      const extraCharacter: Record<string, string> = selectedCharacter
        ? { character: `${selectedCharacter}` }
        : {};
      setSearchParams({
        ..._.omit(filters, ["character"]),
        ...extraCharacter,
      });
    }
  }, [
    comparableFilters,
    selectedCharacter,
    comparableSearchFiltersParams,
    setSearchParams,
  ]);

  const searchParamsCharacter = searchParamsObject.character
    ? +searchParamsObject.character
    : null;

  useEffect(() => {
    if (selectedCharacter !== searchParamsCharacter) {
      const newSearchParams = { ...searchParamsObject };
      if (selectedCharacter) {
        newSearchParams.character = `${selectedCharacter}`;
      } else {
        delete newSearchParams["character"];
      }
      setSearchParams(newSearchParams);
    }
  }, [selectedCharacter, searchParamsCharacter, setSearchParams]);

  return { filters, setFilters, selectedCharacter, setSelectedCharacter };
};

export default useRickMortySearchParams;
