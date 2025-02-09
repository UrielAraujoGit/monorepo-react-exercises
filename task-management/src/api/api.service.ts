import { TBoardMin } from "../models/board.type";
import { TCollection } from "../models/collection.type";
import { TStateMin } from "../models/state.type";
import { TTaskMin } from "../models/task.type";
import { getData, KEY_BOARDS_LOCALSTORAGE } from "./db-local";

export const getBoards = () => {
  const boards_data = getData();
  const boards: TCollection<TBoardMin> = {};
  Object.keys(boards_data).forEach((key) => {
    boards[key] = {
      ...boards_data[key],
      states: Object.keys(boards_data[key].states).length,
    };
  });
  return boards;
};

export const postBoard = (name: string) => {
  const data = getData();
  const id = Object.keys(data).length + 1;
  data[id] = { id, name, states: {} };
  localStorage.setItem(KEY_BOARDS_LOCALSTORAGE, JSON.stringify(data));
  return data[id];
};

export const getStates = (id_board: number) => {
  const board_data = getData()[id_board];

  if (!board_data) {
    console.warn("no board data found!");
    return null;
  }

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
  const state_data = getData()[id_board]?.states[id_state];

  if (!state_data) {
    console.warn("no state data found!");
    return null;
  }

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
  const result = getData()[id_board]?.states[id_state]?.tasks[id_task].subtasks;
  if (!result) {
    console.warn("no subtasks data found!");
    return null;
  }

  return result;
};
