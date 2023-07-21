import SearchForm from "@/pages/Search/components/SearchForm";
import SearchResult from "@/pages/Search/components/SearchResult";
import SearchTotal from "@/pages/Search/components/SearchTotal";
import { useCallback, useState } from "react";

const Search = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [totalResults, setTotalResults] = useState<number | null>(null);

  const onSearchQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchVal(e?.target?.value);
    },
    []
  );

  const onSearchBtnClick = () => {
    if (searchVal === searchQuery) return;
    setSearchQuery(searchVal);
    setTotalResults(null);
    setShouldFetch(true);
  };

  return (
    <>
      <SearchForm
        onSearchQueryChange={onSearchQueryChange}
        onSearchBtnClick={onSearchBtnClick}
      />
      {totalResults !== null && (
        <SearchTotal>{totalResults.toString()}</SearchTotal>
      )}
      <SearchResult
        searchQuery={searchQuery}
        shouldFetch={shouldFetch}
        setTotalResults={setTotalResults}
      />
    </>
  );
};

export default Search;
