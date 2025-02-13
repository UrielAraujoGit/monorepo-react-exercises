import { useContext } from "react";
import { BoardContext } from "../../context/board.context";
import { getSubtasks } from "../../api/api.service";
import { TTaskMin } from "../../models/task.type";

export const TaskCard = (props: { task: TTaskMin; id_state: number }) => {
  const { id_board } = useContext(BoardContext);

  const subtasks = getSubtasks(id_board, props.id_state, props.task.id);
  return (
    <>
      <div className="py-3 px-4 bg-task-mono-600 text-task-mono-100 rounded-lg font-semibold text-sm cursor-pointer">
        <p className="text-task-mono-100">{props.task.name}</p>
        <p className="text-task-mono-400">
          {
            Object.values(subtasks ?? {}).filter((subtask) => subtask.completed)
              .length
          }{" "}
          of {props.task.subtasks} subtasks
        </p>
      </div>
    </>
  );
};
