import { TBoard } from "../../utils/boards.type";

export const fnChangeNameBoard = (
  nameNewBoard: string,
  boardSelected: number,
  setBoards: (value: React.SetStateAction<TBoard[]>) => void,

): void => {
  
    setBoards((prevItems) => {
      return prevItems.map((board) =>
        board.id === boardSelected
          ? { ...board, name: nameNewBoard } : board
      )
    });
};
