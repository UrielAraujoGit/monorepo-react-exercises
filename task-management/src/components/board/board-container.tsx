import { useContext, useState } from "react";
import { getStates } from "../../api/api.service";
import { BoardContext } from "../../context/board.context";
import { TComponentProps } from "../../models/component-props.type";
import { BoardCard } from "./board-card";
import { BoardFormModal } from "./board-form-modal";

export const BoardContainer = (props: TComponentProps<"div">) => {
  const { boards } = useContext(BoardContext);

  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const boardKeys = Object.keys(boards);

  return (
    <>
      <div className="grid" {...props}>
        <h6 className="uppercase text-task-mono-400 my-6 ml-5 mt-4 text-sm font-semibold">
          all boards ( {boardKeys.length} )
        </h6>

        <BoardList />

        <BoardCard
          className="text-task-purple-dark"
          onClick={() => toggleShowModal()}
        >
          <p className="capitalize text-task-purple-dark">+ create new board</p>
        </BoardCard>

        <BoardFormModal
          showModal={showModal}
          toggleShowModal={toggleShowModal}
          isEdit={false}
        />
      </div>
    </>
  );
};

const BoardList = () => {
  const {
    boards,
    id_board: id_board_context,
    setIdBoard,
    setStates,
  } = useContext(BoardContext);
  const boardKeys = Object.keys(boards);

  return (
    <>
      {boardKeys.map((id_board) => (
        <BoardCard
          key={id_board}
          active={Number(id_board) === id_board_context}
          onClick={() => {
            setIdBoard(Number(id_board));
            setStates(getStates(Number(id_board)) ?? {});
          }}
          className="max-w-full truncate flex flex-wrap "
        >
          <p className="truncate capitalize" title={boards[id_board].name}>
            {boards[id_board].name}
          </p>
        </BoardCard>
      ))}
    </>
  );
};
