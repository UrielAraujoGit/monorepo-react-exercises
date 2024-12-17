export const BASE_URL = "https://api.unsplash.com";

export const getApiKey = () => {
  const API_KEY = localStorage.getItem("api-key");
  if (!API_KEY) {
    console.error("api key not found!");
    return;
  }
  if (typeof JSON.parse(API_KEY) !== "string") {
    console.error("api key format not valid!");
    return;
  }

  return JSON.parse(API_KEY);
};
