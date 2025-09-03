import { TBoard } from "../../utils/boards.type";

export const deleteBoard = (
  id: number,
  setBoards:(value: React.SetStateAction<TBoard[]>) => void,
  setBoardSelected: React.Dispatch<React.SetStateAction<number>>
) => {
  setBoards(prevBoards => prevBoards.filter(board => board.id !== id));
  setBoardSelected(1);
};
