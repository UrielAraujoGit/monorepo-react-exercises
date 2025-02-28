import { createContext } from "react";
import { TBoardMin } from "../models/board.type";
import { TCollection } from "../models/collection.type";
import { TStateMin } from "../models/state.type";

export type TBoardContext = {
  id_board: number;
  setIdBoard: (id_board: number) => void;
  board: TBoardMin | null;
  // setBoard?
  boards: TCollection<TBoardMin>;
  setBoards: (newBoards: TCollection<TBoardMin>) => void;
  states: TCollection<TStateMin>;
  setStates: (states: TCollection<TStateMin>) => void;
  // id_state:number,
  // id_task:number,
};

export const BoardContext = createContext<TBoardContext>({
  id_board: 0,
  setIdBoard: () => console.error("fn setIdBoard not implemented!"),
  board: null,
  boards: {},
  setBoards: () => console.error("fn setBoards not implemented!"),
  states: {},
  setStates: () => console.error("fn setStates not implemented!"),
});
