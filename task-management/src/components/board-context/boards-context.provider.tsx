import { useEffect, useState } from "react";
import { dataTemporaly } from "../../models/datatemporaly";
import { TBoard, TSubTask } from "../../utils/boards.type";
import { fnNewBoards as importedFnNewBoards } from "../boards/fnnewboards";
import { fnNewState as importedFnNewState } from "../states/fnnewstate";
import { fnNewTasks as importedFnNewTasks } from "../tasks/fnnewtasks";
import { BoardsContext } from "./boards.context";
import { fnCompletedSubTasks as importedFnComletedSubtasks } from "../tasks/fnchangesubtasks";
import { moveTask as importedMoveTask } from "../tasks/fnchangetaskofstate";
import { lastId } from "../service/lastId";
import { deleteBoard as importedDeleteBoard } from "../boards/deleted.boards";
import { fnChangeStateName as importedFnChangeStateName  } from "../states/fnChangeStateName";
import { fnChangeNameBoard as importedFnChangeNameBoard } from "../boards/fnChangeNameBoards";

type TBoardsProviderProps = {
  children: React.ReactNode;
};

const BoardsProvider: React.FC<TBoardsProviderProps> = ({ children }) => {
  const [boards, setBoards] = useState<TBoard[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("boards");

    if (stored) {
      setBoards(JSON.parse(stored));
    } else {
      setBoards(dataTemporaly); // primera vez, arranca con el JSON de ejemplo
    }
    setIdToDo(lastId(stored ? JSON.parse(stored!) : dataTemporaly))
  }, []);

  useEffect(() => {
    if (boards.length > 0) {
      localStorage.setItem("boards", JSON.stringify(boards));
    }
  }, [boards]);


  const [boardSelected, setBoardSelected] = useState(1);
  const [idToDo, setIdToDo] = useState<number>(100);


  const fnNewId = () => setIdToDo((prev) => prev + 1);

  const fnNewBoards = (nameNewBoard: string) => {
    importedFnNewBoards(nameNewBoard, fnNewId, idToDo, boards, setBoards);
  };

  const fnNewState = (nameNewState: string, addBgColor: string) => {
    importedFnNewState(nameNewState, addBgColor, boards, fnNewId, idToDo, setBoards, boardSelected)
  }

  const fnNewTasks = (nameNewTask: string, addSubTasks: Array<TSubTask>,) => {
    importedFnNewTasks(nameNewTask, addSubTasks, boards,
      fnNewId,
      idToDo,
      setBoards,
      boardSelected)
  }

  const fnCompletedSubTasks = (subTaskId: number,
    iscompleted: boolean,
    stateId: number,
    taskId: number,) => {
    importedFnComletedSubtasks(subTaskId,
      iscompleted,
      stateId,
      taskId,
      setBoards,
      boardSelected)
  }

  const moveTask = (
    boardId: number,
    fromStateId: number,
    toStateId: number,
    taskId: number,
  ) => {
    importedMoveTask(
      boardId,
      fromStateId,
      toStateId,
      taskId,
      setBoards)
  }
  const deleteBoard = () => {
    importedDeleteBoard(
      boardSelected,
      setBoards,
      setBoardSelected,
    )
  }
  const fnChangeStateName = (
    nameState: string,
    idState: number,
  ) => {
    importedFnChangeStateName(
      nameState,
      idState,
      setBoards,
      boardSelected,
    )
  }
  const fnChangeNameBoard = (
    nameNewBoard: string,
  ) => {
    importedFnChangeNameBoard(
      nameNewBoard,
      boardSelected,
      setBoards,
    )
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
        fnCompletedSubTasks,
        moveTask,
        deleteBoard,
        fnChangeStateName,
        fnChangeNameBoard,
      }}
    >
      {children}
    </BoardsContext.Provider>
  );
};

export default BoardsProvider;