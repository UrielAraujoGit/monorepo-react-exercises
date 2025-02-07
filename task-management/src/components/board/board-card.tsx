import { TBoardMin } from "../../models/board.type";

export const BoardCard = (props: {
  board: TBoardMin;
  fnHandleClick: () => void;
  active?: boolean;
}) => (
  <>
    <button onClick={props.fnHandleClick}>
      <h5
        className={`flex md:gap-4 flex-wrap font-semibold py-3 px-6 pr-12 rounded-2xl rounded-l-none ${
          props.active ? "text-white bg-task-purple-dark" : "text-task-mono-400"
        }`}
      >
        <img src="icon-board.svg" alt="icon board" className="object-contain" />
        <p>{props.board.name}</p>
      </h5>
    </button>
  </>
);
