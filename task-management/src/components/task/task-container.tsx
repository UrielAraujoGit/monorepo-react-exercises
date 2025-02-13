import { TTaskMin } from "../../models/task.type";
import { TaskCard } from "./task-card";

export const TaskContainer = (props: {
  tasks: { [key: string]: TTaskMin };
  id_state: number;
}) => (
  <>
    <div className="grid gap-2">
      {Object.keys(props.tasks).map((id_task) => (
        <TaskCard
          key={id_task}
          task={props.tasks[id_task]}
          id_state={props.id_state}
        ></TaskCard>
      ))}
    </div>
  </>
);
