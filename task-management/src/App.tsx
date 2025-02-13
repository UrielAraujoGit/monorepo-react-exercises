import { useState } from "react";
// import { getBoards, getStates, getSubtasks, getTasks } from "./api/api.service";
import "./App.css";
import { BoardContainer } from "./components/board/board-container";
import { BoardContext } from "./context/board.context";
import NavBarTitle from "./components/navbar/navbar-title";
import StateContainer from "./components/state/state-container";
import { NavbarMenu } from "./components/navbar/navbar-menu";

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

  return (
    <>
      <div className="h-screen flex flex-row ">
        <BoardContext.Provider
          value={{
            id_board: idBoardSelected,
            setIdBoard: setIdBoardSelected,
          }}
        >
          <div className="w-1/5">
            <NavBarTitle></NavBarTitle>
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
