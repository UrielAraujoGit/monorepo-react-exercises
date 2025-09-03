import { TBoard } from "../../utils/boards.type";

export function lastId  (
    boards: Array<TBoard>,
): number  {
    let maxId = 0;

    boards.forEach(board => {
        if (board.id > maxId) maxId = board.id;

        board.states?.forEach((state) => {
            if (state.id > maxId) maxId = state.id;

            state.tasks?.forEach((task) => {
                if (task.id > maxId) maxId = task.id;

                task.subtasks?.forEach((subtask) => {
                    if (subtask.id > maxId) maxId = subtask.id;
                });
            });
        });
    });
    return maxId + 1;
}