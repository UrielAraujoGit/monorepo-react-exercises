import { useContext } from "react";
import { getTasks } from "../../api/api.service";
import { BoardContext } from "../../context/board.context";
import { TComponentProps } from "../../models/component-props.type";

export const StateCard = (
  props: { id_state: number } & TComponentProps<"div">
) => {
  const { id_board } = useContext(BoardContext);

  const tasks = getTasks(id_board, props.id_state);

  const divProps = { ...props, id_state: undefined };

  return (
    <div
      {...divProps}
      className={`py-3 px-4 bg-task-mono-600 text-task-mono-100 rounded-lg font-semibold text-sm ${
        divProps.className ?? ""
      }`}
    >
      StateCard works!: {Object.keys(tasks ?? {}).toString()}
    </div>
  );
};
