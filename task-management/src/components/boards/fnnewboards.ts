import { TBoard } from "../../utils/boards.type";

export const fnNewBoards = (
    nameNewBoard: string,
    fnNewId:()=> void,
    idToDo:number,
    boards: Array<TBoard>,
    setBoards:(value: React.SetStateAction<TBoard[]>) => void,

): void => {
  if (
    nameNewBoard === "" ||
    nameNewBoard === undefined ||
    nameNewBoard.trim() === ""
  ) {
    alert("El nombre del tablero no puede estar vacío.");
    return;
  } else {
    
    const existName = boards.some((item) => item.name === nameNewBoard);
    
    if (existName) {
      alert("El nombre del nuevo tablero ya existe.");
      return;  
    
    } else {
      const newDataBoar: TBoard = {
        id: idToDo,
        name: nameNewBoard,
        states: [],
      };

      setBoards((prevItems) => [...prevItems, newDataBoar]);
    }
  }
  fnNewId();
};
