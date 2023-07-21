import { swrFetcher } from "@/lib/swrFetcher";
import { useMemo } from "react";
import useSWRInfinite from "swr/infinite";

type UseSWRInfiniteResponseType = {
  collection: Collection;
};

type Props = {
  shouldFetch: boolean;
  searchQuery: string;
};

export const useSearch = ({ searchQuery, shouldFetch }: Props) => {
  const { data, error, isValidating, size, setSize } =
    useSWRInfinite<UseSWRInfiniteResponseType>(
      (index) =>
        shouldFetch
          ? `https://images-api.nasa.gov/search?${searchQuery}&media_type=image&page=${
              index + 1
            }`
          : null,
      swrFetcher
    );

  const assets = useMemo(() => {
    return data
      ? data.reduce(
          (acc: Asset[], item: UseSWRInfiniteResponseType) =>
            item.collection ? [...acc, ...item.collection.items] : acc,
          []
        )
      : [];
  }, [data]);

  const isListEnd = useMemo(() => {
    return (
      data?.[data.length - 1].collection?.links?.findIndex(
        (link) => link.rel === "next"
      ) === -1
    );
  }, [data]);

  return { data, error, isValidating, size, setSize, assets, isListEnd };
};
