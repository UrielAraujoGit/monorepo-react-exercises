import { TCollection } from "./collection.type";
import { TTask } from "./task.type";

export type TState = {
  id: number;
  name: string;
  tasks: TCollection<TTask>;
};

export type TStateMin = Omit<TState, "tasks"> & { tasks: number };
