import { useContext } from "react";
import { getTasks } from "../../api/api.service";
import { BoardContext } from "../../context/board.context";
import { TComponentProps } from "../../models/component-props.type";
import { TaskContainer } from "../task/task-container";
import { TStateMin } from "../../models/state.type";

export const StateCard = (
  props: { state: TStateMin } & TComponentProps<"div">
) => {
  const { id_board } = useContext(BoardContext);

  const tasks = getTasks(id_board, props.state.id);

  const divProps = { ...props, id_state: undefined };

  return (
    <div {...divProps} className={` ${divProps.className ?? ""}`}>
      <p className="capitalize text-task-mono-400 text-sm mb-4 font-semibold">
        {props.state.name} ( {props.state.tasks} )
      </p>
      <TaskContainer
        tasks={tasks ?? {}}
        id_state={props.state.id}
      ></TaskContainer>
    </div>
  );
};
