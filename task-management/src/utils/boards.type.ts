export type TBoard = {
    id: number;
    name: string;
    states: Array<TState>;
  };
  
  export type TState = {
    id: number;
    name: string;
    color: string;
    tasks: Array<TTask>;
  };
  
  export type TTask = {
    id: number;
    name: string;
    subtasks: Array<TSubTask>;
  };
  
  export type TSubTask = {
    id: number;
    name: string;
    completed: boolean;
  };