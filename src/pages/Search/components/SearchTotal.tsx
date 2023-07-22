import { useSearch } from "@/hooks/useSearch";

const SearchTotal = () => {
  const { totalResults } = useSearch();

  if (!totalResults) return null;

  return (
    <div className="col-span-full">
      <p className="text-grey-dark mb-4">Total found: {totalResults}</p>
    </div>
  );
};

export default SearchTotal;
