import { TCollection } from "./collection.type";
import { TState } from "./state.type";

export type TBoard = {
  id: number;
  name: string;
  states: TCollection<TState>;
};

export type TBoardMin = Omit<TBoard, "states"> & { states: number };
