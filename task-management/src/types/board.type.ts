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
    subtasks: Array<TSubTak>;
  };
  
  export type TSubTak = {
    id: number;
    name: string;
    completed: boolean;
  };