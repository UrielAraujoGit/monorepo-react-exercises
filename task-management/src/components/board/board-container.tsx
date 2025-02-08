import { useContext } from "react";
import { getBoards } from "../../api/api.service";
import { BoardContext } from "../../context/board.context";
import BoardCard from "./board-card";

export const BoardContainer = () => {
  const boards = getBoards();

  const boardContext = useContext(BoardContext);

  return (
    <>
      <div>
        <h6 className="uppercase text-task-mono-400 my-6 ml-5 text-sm font-semibold">
          all boards ( {Object.keys(boards).length} )
        </h6>
        {Object.keys(boards).map((id_board) => (
          <BoardCard
            key={id_board}
            active={Number(id_board) === boardContext.id_board}
            onClick={() => boardContext.setIdBoard(Number(id_board))}
          >
            <p>{boards[id_board].name}</p>
          </BoardCard>
        ))}

        <BoardCard
          className="text-task-purple-dark"
          onClick={() => console.log("Awa")}
        >
          <p className="capitalize text-task-purple-dark">+ create new board</p>
        </BoardCard>
      </div>
    </>
  );
};
