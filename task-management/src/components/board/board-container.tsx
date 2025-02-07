import { useContext } from "react";
import { getBoards } from "../../api/api.service";
import { BoardCard } from "./board-card";
import { BoardContext } from "../../context/board.context";

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
            board={boards[id_board]}
            active={Number(id_board) === boardContext.id_board}
            fnHandleClick={() => boardContext.setIdBoard(Number(id_board))}
          ></BoardCard>
        ))}
      </div>
    </>
  );
};
