import { TCollection } from "./collection.type";
import { TTask } from "./task.type";

export type TSate = {
  id: number;
  name: string;
  tasks: TCollection<TTask>;
};
