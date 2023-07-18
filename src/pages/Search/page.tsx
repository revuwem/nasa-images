import SearchForm from "@/pages/Search/components/SearchForm";
import SearchResult from "@/pages/Search/components/SearchResult";

const Search = () => {
  return (
    <main className="grid grid-cols-5 gap-x-6 md:grid-cols-6">
      <SearchForm />
      <SearchResult />
    </main>
  );
};

export default Search;
