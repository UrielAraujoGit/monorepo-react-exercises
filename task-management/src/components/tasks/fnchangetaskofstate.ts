import { TBoard } from "../../utils/boards.type";

export const moveTask = (
    boardId:number,
    fromStateId:number,
    toStateId:number,
    taskId:number,
    setBoards:(value: React.SetStateAction<TBoard[]>) => void
) => {

    setBoards((prevBoards) =>
        prevBoards.map((board) => {
            if (board.id !== boardId) return board;

            const fromState = board.states.find((s) => s.id === fromStateId);
            const toState = board.states.find((s) => s.id === toStateId);
            if (!fromState || !toState) return board;

            const taskToMove = fromState.tasks.find((t) => t.id === taskId);
            if (!taskToMove) return board;

            return {
                ...board,
                states: board.states.map((state) => {
                    if (state.id === fromStateId) {
                        return {
                            ...state,
                            tasks: state.tasks.filter((t) => t.id !== taskId), // la sacamos
                        };
                    }
                    if (state.id === toStateId) {
                        return {
                            ...state,
                            tasks: [...state.tasks, taskToMove], // la metemos
                        };
                    }
                    return state;
                }),
            };
        })
    );
};
