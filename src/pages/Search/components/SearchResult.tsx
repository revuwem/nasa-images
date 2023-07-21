import Button from "@/components/Button";
import CollectionCard from "@/components/CollectionCard";
import Paragraph from "@/components/Paragraph";
import { useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import { useSearch } from "@/hooks/useSearch";

type Props = {
  searchQuery: string | null;
  shouldFetch: boolean;
  setTotalResults: (state: number) => void;
};

const SearchResult: React.FC<Props> = ({
  searchQuery,
  shouldFetch,
  setTotalResults,
}) => {
  const {
    assets,
    totalResults,
    error,
    isLoading,
    isValidating,
    isNoItemsFound,
    isListEnd,
    size,
    setSize,
  } = useSearch({ searchQuery, shouldFetch });

  useEffect(() => {
    totalResults ? setTotalResults(totalResults) : null;
  }, [totalResults, setTotalResults]);

  const onLoadMoreBtnClick = () => {
    void setSize(size + 1);
  };

  return (
    <div className="col-span-full">
      {/* List of results */}
      {isNoItemsFound && <Paragraph>No items found</Paragraph>}

      {!isNoItemsFound && (
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {assets.map((item) => (
            <li key={uuidv4()}>
              <CollectionCard
                data={{
                  preview: item.links[0].href,
                  title: item.data[0].title,
                  location: item.data[0]?.location || "",
                  author:
                    item.data[0]?.photographer ||
                    item.data[0]?.secondary_creator ||
                    "",
                }}
              />
            </li>
          ))}
        </ul>
      )}

      {isLoading && <Paragraph>Loading...</Paragraph>}
      {error && <Paragraph>Error occured: {error?.message}</Paragraph>}

      {assets.length > 0 && !isListEnd && (
        <div className="col-span-full grid place-items-center">
          <Button disabled={isValidating} onClick={() => onLoadMoreBtnClick()}>
            {isValidating ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
