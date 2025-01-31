import data from "../data/boards-data.json";
import { TBoard, TBoardMin } from "../models/board.type";
import { TCollection } from "../models/collection.type";
import { TStateMin } from "../models/state.type";
import { TTaskMin } from "../models/task.type";

export const getBoards = () => {
  const boards_data = data as TCollection<TBoard>;
  const boards: TCollection<TBoardMin> = {};
  Object.keys(boards_data).forEach((key) => {
    boards[key] = {
      ...boards_data[key],
      states: Object.keys(boards_data[key].states).length,
    };
  });
  return boards;
};

export const getStates = (id_board: number) => {
  const board_data = (data as TCollection<TBoard>)[id_board];
  const states: TCollection<TStateMin> = {};
  Object.keys(board_data.states).forEach((key) => {
    states[key] = {
      ...board_data.states[key],
      tasks: Object.keys(board_data.states[key].tasks).length,
    };
  });
  return states;
};

export const getTasks = (id_board: number, id_state: number) => {
  const state_data = (data as TCollection<TBoard>)[id_board].states[id_state];
  const tasks: TCollection<TTaskMin> = {};
  Object.keys(state_data.tasks).forEach((key) => {
    tasks[key] = {
      ...state_data.tasks[key],
      subtasks: Object.keys(state_data.tasks[key].subtasks).length,
    };
  });
  return tasks;
};

export const getSubtasks = (
  id_board: number,
  id_state: number,
  id_task: number
) => {
  return (data as TCollection<TBoard>)[id_board].states[id_state].tasks[id_task]
    .subtasks;
};
