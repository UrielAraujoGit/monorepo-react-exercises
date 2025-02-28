import { useContext, useEffect, useState } from "react";
import { postBoard, putBoard } from "../../api/api.service";
import { BoardContext } from "../../context/board.context";
import { Modal } from "../modal/modal";

export const BoardFormModal = (props: {
  showModal: boolean;
  toggleShowModal: () => void;
  isEdit: boolean;
  //   changeBoard: (board: TBoardMin) => void;
}) => {
  const { states, boards, setBoards, id_board, board } =
    useContext(BoardContext);

  const inputs = props.isEdit ? Object.keys(states) : ["1"];

  const [boardName, setBoardName] = useState("");
  // console.log("board modal ", boardName, board);

  useEffect(() => {
    setBoardName(props.isEdit ? board?.name ?? "" : "");
  }, [id_board, props.isEdit]);

  return (
    <Modal show={props.showModal} showChange={props.toggleShowModal}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget[0] as HTMLInputElement;
          if (!input.value?.trim()) {
            props.toggleShowModal();
            return;
          }

          const newBoard = props.isEdit
            ? putBoard(id_board, input.value)
            : postBoard(input.value);

          if (newBoard) {
            console.log(`board ${newBoard.id} - ${newBoard.name} created!`);
            props.toggleShowModal();
            setBoards({ ...boards, [newBoard.id]: newBoard });
          }
        }}
      >
        <p className="text-2xl capitalize font-semibold text-task-mono-100 mb-5">
          add new board
        </p>
        <label>
          <p className="capitalize text-task-mono-100 font-semibold text-sm mb-2">
            board name
          </p>
          <input
            type="text"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            placeholder="board name"
            className="bg-inherit border rounded-md px-4 py-1 text-task-mono-100 outline-none border-task-mono-500 active:border-task-mono-300 focus:border-task-purple-dark transition-all"
          />
        </label>

        <div className="grid my-5">
          <p className="capitalize text-task-mono-100 font-semibold text-sm mb-2">
            board columns
          </p>
          {inputs.map((state_id) => (
            <div key={state_id} className="my-1">
              <input
                value={props.isEdit ? states[state_id].name : ""}
                type="text"
                placeholder="column name"
                className="bg-inherit border rounded-md px-4 py-1 text-task-mono-100 outline-none border-task-mono-500 active:border-task-mono-300 focus:border-task-purple-dark transition-all"
              />
            </div>
          ))}
        </div>

        <button className="capitalize bg-task-purple-dark px-5 py-2 rounded-lg w-full text-task-mono-100 font-semibold">
          {props.isEdit ? "edit board" : "create new board"}
        </button>
      </form>
    </Modal>
  );
};
