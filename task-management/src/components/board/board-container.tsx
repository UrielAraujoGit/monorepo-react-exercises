import { getBoards } from "../../api/api.service";
import { BoardCard } from "./board-card";

export const BoardContainer = () => {
  const boards = getBoards();

  return (
    <>
      <div>
        <h6 className="uppercase">all boards ({Object.keys(boards).length})</h6>
        {Object.keys(boards).map((id_board) => (
          <BoardCard key={id_board} board={boards[id_board]}></BoardCard>
        ))}
      </div>
    </>
  );
};
