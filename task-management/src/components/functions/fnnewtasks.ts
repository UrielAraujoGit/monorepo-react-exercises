import { TBoard, TSubTask, TTask } from "../../types/board.type";

export const fnNewTasks = (
    nameNewTask: string,
    addSubTasks: Array<TSubTask>,
    boardSelect: TBoard,
    fnNewId:()=>void,
    idToDo: number,
    setBoards: (value: React.SetStateAction<TBoard[]>) => void,
    boardSelectedId:number|null
) => {
    

    if (nameNewTask.trim() === "") return;

    const existName = boardSelect?.states?.[0]?.tasks?.some(
        (item) => item.name === nameNewTask
    );
    if (existName) {
        alert("El nombre del nuevo tablero ya existe.");
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
            board.id === boardSelectedId
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