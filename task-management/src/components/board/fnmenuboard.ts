import { TBoard, TState } from "../../types/board.type";


export const fnOrderColumns = (
  column: TState,
  showBoard: TBoard,
  setShowBoard: React.Dispatch<React.SetStateAction<TBoard>>
) => {

  const newColumns = [...showBoard.states]
  const indice = showBoard.states.indexOf(column)

  newColumns.sort((a, b) => {
    if (a === column && showBoard.states.indexOf(b) === indice - 1) {
      return -1; // Mover el elemento hacia la izquierda
    }
    if (b === column && showBoard.states.indexOf(a) === indice - 1) {
      return 1; // Dejar que el elemento previo tome la posición derecha
    }
    return showBoard.states.indexOf(a) - showBoard.states.indexOf(b); // Mantener el orden original
  });



  setShowBoard((prev) => ({
    ...prev,
    states: newColumns
  }));

  // setBoards((prevBoards) => {
  //   return prevBoards.map((board) =>
  //     board.id === boardSelectedId
  //       ? { ...board, states: newColumns }
  //       : board
  //   );
  // });
};

export const fnChangeNameBoard = (
  newName:string,
  boards: Array<TBoard>,
  setShowBoard: React.Dispatch<React.SetStateAction<TBoard>>,
  showBoard: TBoard
) => {
  
  const newNameBoard: string = newName? newName : showBoard.name
  const existName = boards.some((item) => item.name ===     newNameBoard);
  if (existName && newNameBoard !== showBoard.name) {
    alert("El nombre del nuevo tablero ya existe.");
    return;
  } else if (
    newNameBoard === undefined ||
    newNameBoard.trim() === ""
  ) {
    alert("El nombre del tablero no puede estar vacío.");
    return;
  }
  
  
  setShowBoard((prev) => ({
    ...prev,
    name: newNameBoard
  }));
  
  
}

export const fnEditMenuBoard = (
  setBoards: React.Dispatch<React.SetStateAction<TBoard[]>>,
  boardSelectedId: number,
  showBoard: TBoard
) => {
  console.log(showBoard.name)
  setBoards((prevBoards) => {
    return prevBoards.map((board) =>
      board.id === boardSelectedId
        ? {...board, states: showBoard.states, name: showBoard.name }
        : board
    );
  })
};