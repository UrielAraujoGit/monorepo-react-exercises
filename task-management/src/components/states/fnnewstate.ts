import { TBoard, TState } from "../../types/board.type";

export const fnNewState = (
  nameNewState: string,
  states: Array<TState>,
  fnNewId: () => void,
  idToDo: number,
  setBoards: (value: React.SetStateAction<TBoard[]>) => void,
  boardSelectedId: number | null
): void => {
  if (nameNewState === undefined || nameNewState.trim() === "") {
    alert("El nombre de la columna no puede estar vacío.");
    return;
  }
  const existName = states.some((item) => item.name === nameNewState);
  if (existName) {
    alert("El nombre de la nueva columna ya existe.");
    return;
  }
  
  fnNewId();
  const newDataState: TState = {
    id: idToDo,
    name: nameNewState,
    color: "red",
    tasks: [],
  };

  setBoards((prevBoards) => {
    return prevBoards.map((board) =>
      board.id === boardSelectedId
        ? { ...board, states: [...board.states, newDataState] }
        : board
    );
  });
};
