import { TCollection, TPhoto } from "../models/collection.type";
import { fetchResolver } from "../utils/fetch-api.util";

export const getApiRandomCollection = async () => {
  return fetchResolver<Array<TCollection>>("collections");
};

export const getApiCollectionById = async (id: string) => {
  return fetchResolver<Array<TPhoto>>(`collections/${id}/photos`);
};
