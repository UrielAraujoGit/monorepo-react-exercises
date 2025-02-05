import { TBoard, TState } from "../../utils/boards.type";

export const fnNewState = (
  nameNewState: string,
  addBgColor: string,
  boards: TBoard[],
  fnNewId: () => void,
  idToDo: number,
  setBoards: (value: React.SetStateAction<TBoard[]>) => void,
  boardSelectedId: number,
): void => {

  if (nameNewState === undefined || nameNewState.trim() === "") {
    alert("El nombre de la columna no puede estar vacío.");
    return;
  }
  
  let existName: boolean = false
  
  boards.find(board => {
    if (board.id === boardSelectedId) {
        board.states.find(state => {
          if (state.name === nameNewState){
            existName = true  
          } else {
            existName = false
          }
      })
    }
  })
    
  if (existName) {
    alert("El nombre de la nueva columna ya existe.");
    return;
  } else {

    const newDataState: TState = {
      id: idToDo,
      name: nameNewState,
      color: addBgColor,
      tasks: [],
    };
    
    setBoards((prevBoards) => {
      return prevBoards.map((board) =>
        board.id === boardSelectedId
          ? { ...board, states: [...board.states, newDataState] }
          : board
      );
    });
    fnNewId();
  }

  
};
