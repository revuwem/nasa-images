import SearchForm from "@/pages/Search/components/SearchForm";
import SearchResult from "@/pages/Search/components/SearchResult";
import SearchTotal from "@/pages/Search/components/SearchTotal";
import { useCallback, useState } from "react";

const Search = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [yearStartVal, setYearStartVal] = useState<string>("");
  const [yearEndVal, setYearEndVal] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [totalResults, setTotalResults] = useState<number | null>(null);

  const onSearchQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchVal(e?.target?.value);
    },
    []
  );

  const onYearStartValChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setYearStartVal(e?.target?.value);
    },
    []
  );

  const onYearEndValChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setYearEndVal(e?.target?.value);
    },
    []
  );

  const onSearchBtnClick = () => {
    if (searchVal === searchQuery) return;

    const newSearchQuery = `${searchVal ? "q=" + searchVal : ""}${
      yearStartVal ? "&year_start=" + yearStartVal : ""
    }${yearEndVal ? "&year_end=" + yearEndVal : ""}`;

    setSearchQuery(newSearchQuery);
    setTotalResults(null);
    setShouldFetch(true);
  };

  return (
    <>
      <SearchForm
        onSearchQueryChange={onSearchQueryChange}
        onYearStartValChange={onYearStartValChange}
        onYearEndValChange={onYearEndValChange}
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
