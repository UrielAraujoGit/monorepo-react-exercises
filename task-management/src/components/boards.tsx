import { useState } from "react"
import { TBoard, TState, TSubTask, TTask } from "../types/board.type"
import { StateBoard } from "./states.board"
import { dataTemporaly } from "../utils/data-model"
import { NewBoardModal } from "./newboard.modal"


export const Boards = () => {
    const [boards, setBoards] = useState<Array<TBoard>>(dataTemporaly)
    const [boardSelectedId, setBoardSelectedId] = useState<number | null>(1)
    const [btnNewBoard, setBtnNewBoard] = useState<boolean>(false)
    const [idToDo, setIdToDo] = useState(100)

    const boardSelect = boards.find((board) => board.id === boardSelectedId);
    const fnNewId = () => { setIdToDo(idToDo + 1) }

    const fnCancelModal = () => { setBtnNewBoard(!btnNewBoard) }

    const fnNewBoars = (nameNewBoard: string): void => {
        if (nameNewBoard === '' || nameNewBoard === undefined || nameNewBoard.trim() === "") {
            alert("El nombre del tablero no puede estar vacío.")
            return
        } else {
            fnNewId()
            const newDataBoar: TBoard = {
                id: idToDo,
                name: nameNewBoard,
                states: []
            }
            const existName = boards.some(item => item.name === nameNewBoard)
            if (!existName) {
                setBoards((prevItems) => [...prevItems, newDataBoar])
            } else {
                alert("El nombre del nuevo tablero ya existe.")
                return
            }
        }
    }

    // data & methods to state

    const states = boardSelect?.states || [];

    const fnNewState = (nameNewState: string): void => {
        if (nameNewState === undefined || nameNewState.trim() === "") {
            alert("El nombre de la columna no puede estar vacío.")
            return
        }
        const existName = states.some(item => item.name === nameNewState)
        if (existName) {
            alert("El nombre del nuevo tablero ya existe.")
            return
        }
        // const newId = states.length > 0
        //     ? Math.max(...states.map(state => state.id)) + 1
        //     : 1;
        fnNewId();
        const newDataState: TState = {
            id: idToDo,
            name: nameNewState,
            color: 'red',
            tasks: []
        };

        setBoards((prevBoards) => {
            return prevBoards.map(board =>
                board.id === boardSelectedId
                    ? { ...board, states: [...board.states, newDataState] }
                    : board
            );
        });

    }

    // data & function to task & sub-task

    const fnNewTasks = (nameNewTask: string, addSubTasks: Array<TSubTask>) => {
        console.log(addSubTasks)
        if (nameNewTask.trim() === '') return;
        
        
        const existName = boardSelect?.states?.[0]?.tasks?.some(item => item.name === nameNewTask);
        if (existName) {
            alert("El nombre del nuevo tablero ya existe.");
            return;
        }
    
        
        fnNewId();
        const newDataTask: TTask = {
            id: idToDo,
            name: nameNewTask,
            subtasks: addSubTasks
        };
    
        setBoards((prevBoards) => {
            return prevBoards.map(board =>
                board.id === boardSelectedId
                    ? { ...board, states: board.states.map((state, index) =>
                        index === 0 
                            ? { ...state, tasks: [...state.tasks, newDataTask] }
                            : state
                    )}
                    : board
            );
        });

    };

    return (
        <>
            <div className="asideBoardSelected">
                {boards.map((group) => {
                    return (
                        <div
                            className="cursor-pointer"
                            key={group.id}
                            onClick={() => {
                                setBoardSelectedId(group.id)
                            }}
                        >
                            <h2>{group.name}</h2>
                        </div>
                    )
                })}
                <button
                    className="border border-slate-400 rounded-md m-1 p-1"
                    onClick={() => { setBtnNewBoard(!btnNewBoard) }}
                >NEW BOARD</button>
                {btnNewBoard ?
                    (<NewBoardModal
                        fnCancel={fnCancelModal}
                        addNewBoars={fnNewBoars}

                    ></NewBoardModal>
                    ) : null}
            </div>
            <div className="board-container">
                {boardSelect ?
                    (<div className="border bg-slate-400">
                        <h3>{boardSelect?.name}</h3>

                        <StateBoard
                            dataStates={boardSelect?.states}
                            addNewState={fnNewState}
                            fnNewId={fnNewId}
                            idToDo={idToDo}
                            fnNewTasks={fnNewTasks}
                        ></StateBoard>
                    </div>) : null}
            </div>
        </>
    )
}