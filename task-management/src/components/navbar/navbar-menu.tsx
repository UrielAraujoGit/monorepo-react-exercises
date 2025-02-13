import { useContext } from "react";
import { getBoards } from "../../api/api.service";
import { BoardContext } from "../../context/board.context";
import { truncate } from "../../utils/truncate";

export const NavbarMenu = () => {
  const { id_board } = useContext(BoardContext);

  // todo: add board obj to context
  const board = getBoards()[id_board];
  return (
    <>
      <div className="flex-grow justify-between flex items-center flex-wrap p-4">
        <h6
          className="capitalize text-task-mono-100 text-2xl font-semibold truncate"
          title={board?.name}
        >
          {truncate(board?.name, 75)}
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
        </div>
      </div>
    </>
  );
};
