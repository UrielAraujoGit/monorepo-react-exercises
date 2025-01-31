import { TBoardMin } from "../../models/board.type";

export const BoardCard = (props: { board: TBoardMin; active?: boolean }) => (
  <>
    <h5
      className={`font-bold py-3 ${
        props.active ? "text-white bg-indigo-600" : "text-gray-600"
      }`}
    >
      {props.board.name}
    </h5>
  </>
);
