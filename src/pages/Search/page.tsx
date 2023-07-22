import SearchForm from "@/pages/Search/components/SearchForm";
import SearchResult from "@/pages/Search/components/SearchResult";
import SearchTotal from "@/pages/Search/components/SearchTotal";

const Search = () => {
  return (
    <>
      <SearchForm />
      <SearchTotal />
      <SearchResult />
    </>
  );
};

export default Search;
