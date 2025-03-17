import { useContext, useState } from "react";
import { BoardContext } from "../../context/board.context";
import { truncate } from "../../utils/truncate.util";
import { BoardFormModal } from "../board/board-form-modal";

export const NavbarMenu = () => {
  const { board } = useContext(BoardContext);

  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex-grow justify-between flex items-center flex-wrap p-4">
        <h6
          className="capitalize text-task-mono-100 text-2xl font-semibold truncate"
          title={board?.name}
        >
          {truncate(board?.name ?? "", 60)}
        </h6>
        <div className="flex">
          <button className="capitalize bg-task-purple-dark px-6 py-3 rounded-3xl font-semibold text-task-mono-100">
            + add new task
          </button>
          <button className="flex items-center pl-5">
            <img
              src="icon-vertical-dots.svg"
              alt="icon vertical dots"
              className="h-5"
            />
          </button>
          <button
            disabled={!board}
            onClick={() => toggleShowModal()}
            className="p-2 border border-task-mono-400 rounded-md text-task-mono-300 disabled:cursor-not-allowed"
          >
            🖊
          </button>
        </div>
      </div>

      <BoardFormModal
        showModal={showModal}
        toggleShowModal={toggleShowModal}
        isEdit={true}
      />
    </>
  );
};
