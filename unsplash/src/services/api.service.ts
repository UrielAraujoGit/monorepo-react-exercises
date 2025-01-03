import { TCollection, TPhoto } from "../models/collection.type";
import { fetchResolver } from "../utils/fetch-api.util";

export const getApiRandomCollection = async () => {
  return fetchResolver<Array<TCollection>>("collections");
};

export const getApiCollectionById = async (id: string) => {
  return fetchResolver<TCollection>(`collections/${id}`);
};

export const getApiCollectionPhotosById = async (
  id: string,
  page = 1,
  perPage = 10
) => {
  return fetchResolver<Array<TPhoto>>(
    `collections/${id}/photos?page=${page}&per_page=${perPage}`
  );
};
