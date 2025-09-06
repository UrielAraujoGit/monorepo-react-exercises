import { TBoard } from "../../utils/boards.type";

export const fnNewBoards = (
  nameNewBoard: string,
  boardSelected: number,
  setBoards: (value: React.SetStateAction<TBoard[]>) => void,

): void => {
  if (
    nameNewBoard === "" ||
    nameNewBoard === undefined ||
    nameNewBoard.trim() === ""
  ) {
    alert("El nombre del tablero no puede estar vacío.");
    return;
  } else {
    setBoards((prevItems) => {
      return prevItems.map((board) =>
        board.id === boardSelected
          ? { ...board, name: nameNewBoard } : board
      )
    });
  }
};
