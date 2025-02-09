import { useState } from "react";
// import { getBoards, getStates, getSubtasks, getTasks } from "./api/api.service";
import "./App.css";
import { BoardContainer } from "./components/board/board-container";
import { BoardContext } from "./context/board.context";

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
      <h1 className="text-center text-3xl">Task Management</h1>
      <BoardContext.Provider
        value={{
          id_board: idBoardSelected,
          setIdBoard: setIdBoardSelected,
        }}
      >
        <div className="flex flex-wrap">
          <div className="w-1/5">
            <BoardContainer></BoardContainer>
          </div>
        </div>
      </BoardContext.Provider>
    </>
  );
}

export default App;
