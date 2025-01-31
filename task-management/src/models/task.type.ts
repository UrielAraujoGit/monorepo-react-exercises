import { TCollection } from "./collection.type";
import { TSubTask } from "./subtask.type";

export type TTask = {
  id: number;
  name: string;
  subtasks: TCollection<TSubTask>;
};

export type TTaskMin = Omit<TTask, "subtasks"> & { subtasks: number };


