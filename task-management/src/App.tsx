import { useEffect, useState } from "react";
// import { getBoards, getStates, getSubtasks, getTasks } from "./api/api.service";
import "./App.css";
import { BoardContainer } from "./components/board/board-container";
import { NavbarMenu } from "./components/navbar/navbar-menu";
import AppIcon from "./components/navbar/app-icon";
import StateContainer from "./components/state/state-container";
import { BoardContext } from "./context/board.context";
import { TCollection } from "./models/collection.type";
import { TState, TStateMin } from "./models/state.type";
import { getBoards } from "./api/api.service";
import { TBoard, TBoardMin } from "./models/board.type";

function App() {
  // const boards = getBoards();
  // console.log(boards);

  // const states = getStates(1);
  // console.log(states);

  // const tasks = getTasks(2, 1);
  // console.log(tasks);

  // const subtasks = getSubtasks(2, 1, 1);
  // console.log(subtasks);

  const [idBoardSelected, setIdBoardSelected] = useState(0);

  const [boards, setBoards] = useState<TCollection<TBoardMin>>({});

  const board: TBoardMin | null = boards[idBoardSelected] ?? null;
  const [states, setStates] = useState<TCollection<TStateMin>>({});

  useEffect(() => {
    setBoards(getBoards());
  }, []);

  return (
    <>
      <div className="h-screen flex flex-row ">
        <BoardContext.Provider
          value={{
            id_board: idBoardSelected,
            setIdBoard: setIdBoardSelected,
            board,
            boards,
            setBoards,
            states,
            setStates,
          }}
        >
          <div className="w-1/5">
            <AppIcon></AppIcon>
            <BoardContainer></BoardContainer>
          </div>
          <div className="flex-grow ">
            <NavbarMenu></NavbarMenu>
            <StateContainer></StateContainer>
          </div>
        </BoardContext.Provider>
      </div>
    </>
  );
}

export default App;
