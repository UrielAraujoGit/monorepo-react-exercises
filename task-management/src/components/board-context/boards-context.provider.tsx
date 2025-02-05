import { useState } from "react";
import { dataTemporaly } from "../../models/datatemporaly";
import { TBoard, TSubTask } from "../../utils/boards.type";
import { fnNewBoards as importedFnNewBoards } from "../boards/fnnewboards";
import { fnNewState as importedFnNewState } from "../states/fnnewstate";
import { fnNewTasks as importedFnNewTasks } from "../tasks/fnnewtasks";
import { BoardsContext } from "./boards.context";



type TBoardsProviderProps = {
    children: React.ReactNode;
  };
  
  const BoardsProvider: React.FC<TBoardsProviderProps> = ({ children }) => {
    const [boards, setBoards] = useState<TBoard[]>(dataTemporaly);
  
    const [boardSelected, setBoardSelected] = useState(1);
    const [idToDo, setIdToDo] = useState<number>(100);
  
    const fnNewId = () => setIdToDo((prev) => prev + 1);
  
    const fnNewBoards = (nameNewBoard: string) => {
      importedFnNewBoards(nameNewBoard, fnNewId, idToDo, boards, setBoards);
    };
  
    const fnNewState = (nameNewState: string, addBgColor: string) => {
      importedFnNewState(nameNewState, addBgColor, boards, fnNewId, idToDo,setBoards, boardSelected)
    }
  
    const fnNewTasks = (nameNewTask: string, addSubTasks: Array<TSubTask>,) => {
      importedFnNewTasks( nameNewTask, addSubTasks, boards,
        fnNewId,
        idToDo,
        setBoards,
        boardSelected )
    }

    return (
      <BoardsContext.Provider
        value={{
          boards,
          setBoards,
          boardSelected,
          setBoardSelected,
          idToDo,
          setIdToDo,
          fnNewId,
          fnNewBoards,
          fnNewState,
          fnNewTasks,
        }}
      >
        {children}
      </BoardsContext.Provider>
    );
  };
  
  export default BoardsProvider;