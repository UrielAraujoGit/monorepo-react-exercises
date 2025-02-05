import { TBoard, TSubTask, TTask } from "../../utils/boards.type";


export const fnNewTasks = (
    nameNewTask: string,
    addSubTasks: Array<TSubTask>,
    boards: Array<TBoard>,
    fnNewId:()=>void,
    idToDo: number,
    setBoards: (value: React.SetStateAction<TBoard[]>) => void,
    boardSelected:number
): void => {
    

    if (nameNewTask.trim() === "" || nameNewTask === undefined ) return;

const boardSelect = boards.map(board => {
    if(board.id === boardSelected) return board.states
})

    const existName = boardSelect?.[0]?.some(
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