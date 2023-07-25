import { collectImages } from "@/lib/helpers";
import { swrFetcher } from "@/lib/swrFetcher";
import { useMemo } from "react";
import useSWR from "swr";

export const useCollection = (id: string | undefined) => {
  const {
    data: collectionData,
    isLoading: isCollectionDataLoading,
    error: isCollectionDataError,
  } = useSWR<UseSWRResponseType<Collection>>(
    id ? `https://images-api.nasa.gov/search?nasa_id=${id}` : null,
    swrFetcher
  );

  const {
    data: asset,
    isLoading: isAssetLoading,
    error: isAssetError,
  } = useSWR<UseSWRResponseType<AssetCollection>>(
    id ? `https://images-api.nasa.gov/asset/${id}` : null,
    swrFetcher
  );

  const collection = useMemo(() => {
    return asset && collectImages(asset.collection.items);
  }, [asset]);

  const data = collectionData?.collection.items[0];

  return {
    data,
    collection,
    isLoading: isCollectionDataLoading,
    isCollectionLoading: isAssetLoading,
    error: isCollectionDataError,
    isCollectionError: isAssetError,
  };
};
