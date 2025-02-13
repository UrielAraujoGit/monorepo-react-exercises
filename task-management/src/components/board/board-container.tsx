import { useContext, useState } from "react";
import { getBoards, postBoard } from "../../api/api.service";
import { BoardContext } from "../../context/board.context";
import { TComponentProps } from "../../models/component-props.type";
import BoardCard from "./board-card";
import { truncate } from "../../utils/truncate";

export const BoardContainer = (props: TComponentProps<"div">) => {
  const [boards, setBoards] = useState(getBoards());

  const boardContext = useContext(BoardContext);

  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="grid" {...props}>
        <h6 className="uppercase text-task-mono-400 my-6 ml-5 mt-4 text-sm font-semibold">
          all boards ( {Object.keys(boards).length} )
        </h6>
        {Object.keys(boards).map((id_board) => (
          <BoardCard
            key={id_board}
            active={Number(id_board) === boardContext.id_board}
            onClick={() => boardContext.setIdBoard(Number(id_board))}
          >
            <p className="truncate" title={boards[id_board].name}>
              {truncate(boards[id_board].name, 20)}
            </p>
          </BoardCard>
        ))}

        <BoardCard
          className="text-task-purple-dark"
          onClick={() => toggleShowModal()}
        >
          <p className="capitalize text-task-purple-dark">+ create new board</p>
        </BoardCard>

        {showModal ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget[0] as HTMLInputElement;
              const newBoard = postBoard(input.value);
              console.log(`board ${newBoard.id} - ${newBoard.name} created!`);
              setBoards({ ...boards, [newBoard.id]: newBoard });
            }}
          >
            <input />
          </form>
        ) : null}
      </div>
    </>
  );
};
