import Layout from "@/components/Layout";
import SearchForm from "@/pages/Search/components/SearchForm";
import SearchResult from "@/pages/Search/components/SearchResult";
import SearchTotal from "@/pages/Search/components/SearchTotal";

const Search = () => {
  return (
    <Layout>
      <SearchForm />
      <SearchTotal />
      <SearchResult />
    </Layout>
  );
};

export default Search;
