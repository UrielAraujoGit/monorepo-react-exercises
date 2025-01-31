import { TCollection } from "./collection.type";
import { TSate } from "./state.type";

export type TBoard = {
  id: number;
  name: string;
  states: TCollection<TSate>;
};

export type TBoardMin = Omit<TBoard, "states"> & { states: number };
