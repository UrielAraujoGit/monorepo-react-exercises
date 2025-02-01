import { TBoardMin } from "../../models/board.type";

export const BoardCard = (props: {
  board: TBoardMin;
  fnHandleClick: () => void;
  active?: boolean;
}) => (
  <>
    <button onClick={props.fnHandleClick}>
      <h5
        className={`font-semibold py-2 px-4 rounded-lg ${
          props.active ? "text-white bg-indigo-600" : "text-gray-600"
        }`}
      >
        {props.board.name}
      </h5>
    </button>
  </>
);
