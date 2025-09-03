import { createContext } from "react";
import { TBoardsContext } from "./boards-contex.type";


export const BoardsContext = createContext<TBoardsContext>({
  boards: [],
  setBoards: () => console.error('setBoar fn no implemented!'),
  boardSelected: 0,
  setBoardSelected: () => console.error('setBoardSelected fn no implemented!'),
  idToDo: 0,
  setIdToDo: () => console.error('setIdToDo fn no implemented!'),
  fnNewId: () => console.error('new Id fn no implemented!'),
  fnNewBoards: () => console.error('new boards fn no implemented!'),
  fnNewState: () => console.error('new state fn no implemented!'),
  fnNewTasks:() => console.log('new task fn no implemented!'),
  fnCompletedSubTasks: () => console.log('Completed sub-tasks fn no implemented!'),
  moveTask: () => console.log('move-task fn no implemented!'),  
  deleteBoard: () => console.log('deleted board fn no implemented!'),  
})

