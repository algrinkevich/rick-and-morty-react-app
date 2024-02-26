import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../../components/Header";
import SearchPanel from "../../components/SearchPanel";
import CharacterInfoPopup from "../../components/CharacterInfoPopup";
import Loader from "../../components/Loader";
import { CharacterInfo } from "../../types";
import { SearchContext } from "../../contexts/Search";
import CardsView from "../../components/CardsView";
import useCharacters from "../../hooks/useCharacters";

function Search() {
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

  const { status, error, data, isFetchingNextPage, fetchNextPage } =
    useCharacters(filters);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.currentTarget.search.value;
    setFilters({ ...filters, name: searchValue });
  };

  const characters = useMemo(() => {
    return (
      data?.pages.reduce(
        (acc, page) => [...acc, ...page.results],
        [] as CharacterInfo[],
      ) || []
    );
  }, [data?.pages]);

  return (
    <>
      <Header />
      <SearchContext.Provider value={{ filters, setFilters }}>
        <SearchPanel onSearch={handleSubmit} />
      </SearchContext.Provider>

      {selectedCharacter && (
        <CharacterInfoPopup
          id={selectedCharacter}
          key={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
      <CardsView
        status={status}
        errorStatus={error?.response?.status}
        characters={characters}
        onPageEnd={fetchNextPage}
        onChangeCharacter={setSelectedCharacter}
      />

      {isFetchingNextPage && <Loader />}
    </>
  );
}

export default Search;
