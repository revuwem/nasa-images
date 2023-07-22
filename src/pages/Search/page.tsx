import SearchForm from "@/pages/Search/components/SearchForm";
import SearchResult from "@/pages/Search/components/SearchResult";
import SearchTotal from "@/pages/Search/components/SearchTotal";
import { useState } from "react";

const Search = () => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [totalResults, setTotalResults] = useState<number | null>(null);

  return (
    <>
      <SearchForm
        setShouldFetch={setShouldFetch}
        setTotalResults={setTotalResults}
      />
      {totalResults !== null && (
        <SearchTotal>{totalResults.toString()}</SearchTotal>
      )}
      <SearchResult
        shouldFetch={shouldFetch}
        setTotalResults={setTotalResults}
      />
    </>
  );
};

export default Search;
