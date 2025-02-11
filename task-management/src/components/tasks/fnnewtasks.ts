import { TBoard, TSubTask, TTask } from "../../utils/boards.type";


export const fnNewTasks = (
    nameNewTask: string,
    addSubTasks: Array<TSubTask>,
    boards: Array<TBoard>,
    fnNewId: () => void,
    idToDo: number,
    setBoards: (value: React.SetStateAction<TBoard[]>) => void,
    boardSelected: number
): void => {


    if (nameNewTask.trim() === "" || nameNewTask === undefined) return;

    let existName: boolean = false

    boards.find(board => {
        if (board.id === boardSelected) {
            board.states.find(state => {
                state.tasks.find(task => {
                    if (task.name === nameNewTask) {
                        existName = true
                    } else {
                        existName = false
                    }
                })
            })
        }
    })


    if (existName) {
        alert("El nombre de la nueva tarea ya existe.");
        return;
    }

    fnNewId();
    const newDataTask: TTask = {
        id: idToDo,
        name: nameNewTask,
        subtasks: addSubTasks,
    };

    setBoards((prevBoards) => {
        return prevBoards.map((board) =>
            board.id === boardSelected
                ? {
                    ...board,
                    states: board.states.map((state, index) =>
                        index === 0
                            ? { ...state, tasks: [...state.tasks, newDataTask] }
                            : state
                    ),
                }
                : board
        );
    });
};