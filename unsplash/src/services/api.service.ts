import { BASE_URL, getApiKey } from "../utils/auth.util";

export const getApiRandomImgs = async () => {
  const response = await fetch(BASE_URL + "/collections", {
    headers: {
      Authorization: "Client-ID " + getApiKey(),
    },
  });
  const result = await response.json();
  return result;
};
