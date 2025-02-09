import { TBoard } from "../models/board.type";
import { TCollection } from "../models/collection.type";

export const KEY_BOARDS_LOCALSTORAGE = "boards-data";

export const getData: () => TCollection<TBoard> = () => {
  const data = JSON.parse(localStorage.getItem(KEY_BOARDS_LOCALSTORAGE)!);

  if (typeof data === "object" && data !== null) {
    return data;
  }

  localStorage.setItem(KEY_BOARDS_LOCALSTORAGE, JSON.stringify({}));

  return {};
};
