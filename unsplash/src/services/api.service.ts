import { TCollection } from "../models/collection.type";
import { BASE_URL, getApiKey } from "../utils/auth.util";

export const getApiRandomCollection = async () => {
  const response = await fetch(BASE_URL + "/collections", {
    headers: {
      Authorization: "Client-ID " + getApiKey(),
    },
  });
  const result: Array<TCollection> = await response.json();
  return result;
};
