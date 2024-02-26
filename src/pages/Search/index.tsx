import { useMemo } from "react";

import Header from "../../components/Header";
import SearchPanel from "../../components/SearchPanel";
import CharacterInfoPopup from "../../components/CharacterInfoPopup";
import Loader from "../../components/Loader";
import { CharacterInfo } from "../../types";
import { SearchContext } from "../../contexts/Search";
import CardsView from "../../components/CardsView";
import useCharacters from "../../hooks/useCharacters";
import useRickMortySearchParams from "../../hooks/useSearchParams";

function Search() {
  const { filters, setFilters, selectedCharacter, setSelectedCharacter } =
    useRickMortySearchParams();

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
  console.log("search re-render", characters.length);

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
