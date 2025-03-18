import { TBoard } from "../../utils/boards.type";


export const fnCompletedSubTasks = (
    subTaskId: number, 
    iscompleted: boolean,
    stateId: number,
    taskId: number,
    setBoards:(value: React.SetStateAction<TBoard[]>) => void,
    boardSelected: number,
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