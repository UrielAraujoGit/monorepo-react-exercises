import { useEffect, useState } from "react";
import { getBoards } from "./api/api.service";
import { BoardContainer } from "./components/board/board-container";
import { AppIcon } from "./components/navbar/app-icon";
import { NavbarMenu } from "./components/navbar/navbar-menu";
import { StateContainer } from "./components/state/state-container";
import { BoardContext } from "./context/board.context";
import { TBoardMin } from "./models/board.type";
import { TCollection } from "./models/collection.type";
import { TStateMin } from "./models/state.type";

function App() {
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
            <AppIcon />
            <BoardContainer />
          </div>
          <div className="flex-grow ">
            <NavbarMenu />
            <StateContainer />
          </div>
        </BoardContext.Provider>
      </div>
    </>
  );
}

export default App;
