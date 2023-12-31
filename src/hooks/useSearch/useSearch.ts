import { swrFetcher } from "@/lib/swrFetcher";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";

type SearchResponseType = UseSWRResponseType<Collection>;

export const useSearch = () => {
  const [searchParams] = useSearchParams();

  const { data, error, isValidating, size, setSize } =
    useSWRInfinite<SearchResponseType>(
      (index) =>
        `https://images-api.nasa.gov/search?${searchParams}&media_type=image&page=${
          index + 1
        }`,
      swrFetcher
    );

  const assets = useMemo(() => {
    return data
      ? data.reduce(
          (acc: Asset[], item: SearchResponseType) =>
            item.collection ? [...acc, ...item.collection.items] : acc,
          []
        )
      : [];
  }, [data]);

  const totalResults = useMemo(() => {
    return data && assets && assets.length > 0
      ? data[0].collection.metadata.total_hits
      : null;
  }, [data, assets]);

  const isListEnd = useMemo(() => {
    const links = data?.[data.length - 1].collection?.links;
    return !links || links?.findIndex((link) => link.rel === "next") === -1;
  }, [data]);

  const isLoading = useMemo(() => {
    return !data && isValidating;
  }, [data, isValidating]);

  const isNoItemsFound = useMemo(() => {
    return data && assets.length === 0;
  }, [data, assets]);

  return {
    error,
    isLoading,
    isValidating,
    isNoItemsFound,
    size,
    setSize,
    assets,
    totalResults,
    isListEnd,
  };
};
