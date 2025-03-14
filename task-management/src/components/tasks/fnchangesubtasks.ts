import { useContext } from "react";
import { BoardsContext } from "../board-context/boards.context";

const {boards, setBoards, boardSelected } = useContext(BoardsContext)

export const fnCompletedSubTasks = (
    subTaskId: number, 
    iscompleted: boolean,
    stateId: number,
    taskId: number,

) => {

    setBoards((prevBoards) => {
        return prevBoards.map((board) =>
            board.id === boardSelected
                ? {
                      ...board,
                      states: board.states.map((state) =>
                          state.id === stateId
                              ? {
                                    ...state,
                                    tasks: state.tasks.map((task) =>
                                        task.id === taskId
                                            ? {
                                                  ...task,
                                                  subtasks: task.subtasks.map((sub) =>
                                                      sub.id === subTaskId
                                                          ? { ...sub, completed: !iscompleted }
                                                          : sub
                                                  ),
                                              }
                                            : task
                                    ),
                                }
                              : state
                      ),
                  }
                : board
        );
    });
}