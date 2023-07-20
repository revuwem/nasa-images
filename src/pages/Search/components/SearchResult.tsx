import Button from "@/components/Button";
import CollectionCard from "@/components/CollectionCard";
import { useEffect } from "react";
import useSWRInfinite from "swr/infinite";
import { v4 as uuidv4 } from "uuid";

type Props = {
  searchQuery: string;
  shouldFetch: boolean;
  setTotalResults: (state: number) => void;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type UseSWRInfiniteResponseType = {
  collection: Collection;
};

const SearchResult: React.FC<Props> = ({
  searchQuery,
  shouldFetch,
  setTotalResults,
}) => {
  const { data, isLoading, size, setSize } =
    useSWRInfinite<UseSWRInfiniteResponseType>(
      (index) =>
        shouldFetch
          ? `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image&page=${
              index + 1
            }`
          : null,
      fetcher
    );

  const assets = data
    ? data.reduce(
        (acc: Asset[], item: UseSWRInfiniteResponseType) => [
          ...acc,
          ...item.collection.items,
        ],
        []
      )
    : [];

  useEffect(() => {
    data ? setTotalResults(data[0].collection.metadata.total_hits) : null;
  }, [data, setTotalResults]);

  const onLoadMoreBtnClick = () => {
    void setSize(size + 1);
  };

  return (
    <div className="col-span-full">
      {/* List of results */}
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
      <div className="col-span-full grid place-items-center">
        {assets.length > 0 && (
          <Button disabled={isLoading} onClick={() => onLoadMoreBtnClick()}>
            {isLoading ? "Loading..." : "Load More"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
