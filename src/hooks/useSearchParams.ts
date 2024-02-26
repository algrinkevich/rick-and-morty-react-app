import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  useEffect(() => {
    setSearchParams(filters);
  }, [filters, setSearchParams]);

  useEffect(() => {
    const newSearchParams = { ...searchParamsObject };
    if (selectedCharacter) {
      newSearchParams.character = `${selectedCharacter}`;
    } else {
      delete newSearchParams["character"];
    }
    setSearchParams(newSearchParams);
  }, [selectedCharacter, setSearchParams]);

  return { filters, setFilters, selectedCharacter, setSelectedCharacter };
};

export default useRickMortySearchParams;
