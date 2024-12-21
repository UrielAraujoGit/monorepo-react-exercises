import { authResolver, BASE_URL } from "./auth.util";

export const fetchResolver = async <T = any>(
  url: string,
  requestObj?: RequestInit
) => {
  const response = await fetch(`${BASE_URL}/${url}`, {
    ...requestObj,
    headers: {
      ...requestObj?.headers,
      ...authResolver(),
    },
  });
  const result: T = await response.json();
  return result;
};
