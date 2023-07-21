import SearchForm from "@/pages/Search/components/SearchForm";
import SearchResult from "@/pages/Search/components/SearchResult";
import SearchTotal from "@/pages/Search/components/SearchTotal";
import { useCallback, useState } from "react";

const Search = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [yearStartVal, setYearStartVal] = useState<string>("");
  const [yearEndVal, setYearEndVal] = useState<string>("");
  const [searchFormError, setSearchFormError] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
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
    if (
      yearStartVal &&
      yearEndVal &&
      Number(yearStartVal) > Number(yearEndVal)
    ) {
      setSearchFormError("Year end should be equal or greater than year start");
      return;
    } else {
      setSearchFormError("");
    }

    const newSearchQuery = `${searchVal ? "q=" + searchVal : ""}${
      yearStartVal ? "&year_start=" + yearStartVal : ""
    }${yearEndVal ? "&year_end=" + yearEndVal : ""}`;

    if (searchQuery === newSearchQuery) return;

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
        error={searchFormError}
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
