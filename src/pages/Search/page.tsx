import SearchForm from "@/pages/Search/components/SearchForm";
import SearchResult from "@/pages/Search/components/SearchResult";
import { useCallback, useState } from "react";

const Search = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onSearchQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchVal(e?.target?.value);
    },
    []
  );

  const onSearchBtnClick = () => {
    setSearchQuery(searchVal);
    setShouldFetch(true);
  };

  return (
    <>
      <SearchForm
        onSearchQueryChange={onSearchQueryChange}
        onSearchBtnClick={onSearchBtnClick}
      />
      <SearchResult searchQuery={searchQuery} shouldFetch={shouldFetch} />
    </>
  );
};

export default Search;
