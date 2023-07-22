import { swrFetcher } from "@/lib/swrFetcher";
import useSWR from "swr";

type UseSWRResponseType = {
  collection: Collection;
};

export const useCollection = (id: string | undefined) => {
  const {
    data: collectionData,
    isLoading: isCollectionDataLoading,
    error: isCollectionDataError,
  } = useSWR<UseSWRResponseType>(
    id ? `https://images-api.nasa.gov/search?nasa_id=${id}` : null,
    swrFetcher
  );

  const {
    data: collectionImages,
    isLoading: isCollectionImagesLoading,
    error: isCollectionImagesError,
  } = useSWR<string[]>(
    collectionData?.collection.items[0].href
      ? collectionData?.collection.items[0].href
      : null,
    swrFetcher
  );

  const collection = collectionImages
    ?.filter((image) => image.includes("orig"))
    .map((image) => ({ href: image }));

  const data = collectionData?.collection.items[0];

  return {
    data,
    collection,
    isLoading: isCollectionDataLoading,
    isCollectionLoading: isCollectionImagesLoading,
    error: isCollectionDataError,
    isCollectionError: isCollectionImagesError,
  };
};
