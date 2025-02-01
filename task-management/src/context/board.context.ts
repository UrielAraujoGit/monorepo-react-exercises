import { createContext } from "react";

export type TBoardContext = {
  id_board: number;
  // id_state:number,
  // id_task:number,
  setIdBoard: (id_board: number) => void;
};

export const BoardContext = createContext<TBoardContext>({
  id_board: 0,
  setIdBoard: () => console.error("fn setIdBoard not implemented!"),
});
