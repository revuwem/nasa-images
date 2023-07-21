import Button from "@/components/Button";
import CollectionCard from "@/components/CollectionCard";
import Paragraph from "@/components/Paragraph";
import { useEffect, useMemo } from "react";
import useSWRInfinite from "swr/infinite";
import { Fetcher } from "swr";
import { v4 as uuidv4 } from "uuid";

type Props = {
  searchQuery: string;
  shouldFetch: boolean;
  setTotalResults: (state: number) => void;
};

const fetcher: Fetcher<UseSWRInfiniteResponseType, string> = async (
  url: string
) => {
  try {
    const res = await fetch(url);
    if (res?.ok) {
      const json = await res.json();
      return json;
    } else {
      throw new Error("Could not fetch data");
    }
  } catch (e) {
    throw new Error("Could not fetch");
  }
};

type UseSWRInfiniteResponseType = {
  collection: Collection;
};

const SearchResult: React.FC<Props> = ({
  searchQuery,
  shouldFetch,
  setTotalResults,
}) => {
  const { data, error, isValidating, size, setSize } =
    useSWRInfinite<UseSWRInfiniteResponseType>(
      (index) =>
        shouldFetch
          ? `https://images-api.nasa.gov/search?${searchQuery}&media_type=image&page=${
              index + 1
            }`
          : null,
      fetcher
    );

  const assets = useMemo(() => {
    return data
      ? data.reduce(
          (acc: Asset[], item: UseSWRInfiniteResponseType) => [
            ...acc,
            ...item.collection.items,
          ],
          []
        )
      : [];
  }, [data]);

  const isListEnd = useMemo(() => {
    return (
      data?.[data.length - 1].collection.links.findIndex(
        (link) => link.rel === "next"
      ) === -1
    );
  }, [assets]);

  useEffect(() => {
    data && assets && assets.length > 0
      ? setTotalResults(data[0].collection.metadata.total_hits)
      : null;
  }, [assets, data, setTotalResults]);

  const onLoadMoreBtnClick = () => {
    void setSize(size + 1);
  };

  return (
    <div className="col-span-full">
      {/* List of results */}
      {data && assets.length === 0 && <Paragraph>No items found</Paragraph>}

      {assets && assets.length > 0 && (
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

      {!data && isValidating && <Paragraph>Loading...</Paragraph>}
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
