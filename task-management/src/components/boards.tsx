import { useEffect, useState } from "react"
import { TBoard } from "../types/board.type"
import { StateBoard } from "./states.board"
import { dataTemporaly } from "../utils/data-model"
import { NewBoardModal } from "./newboard.modal"


export const Boards = () => {
    const [boards, setBoards] = useState<Array<TBoard>>(dataTemporaly)
    const [boardSelect, setBoardSelect] = useState<TBoard | null>(null)
    const [btnNewBoard, setBtnNewBoard] = useState<boolean>(false)

    if (boards.length !== 0) {
        useEffect(() => {
            setBoardSelect(boards[0])
        }, [])
    }

    const fnCancelModal = () => {
        setBtnNewBoard(!btnNewBoard)
    }

    const fnNewBoars = (nameNewBoard: string): void => {
        if (nameNewBoard === '' || nameNewBoard === undefined || nameNewBoard.trim() === "") {
            alert("El nombre del tablero no puede estar vacío.")
            return
        } else {
            const newDataBoar: TBoard = {
                id: boards.length +1,
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
    

    return (
        <>
            <div className="asideBoardSelected">
                {boards.map((group) => {
                    return (
                        <div
                            className="cursor-pointer"
                            key={group.id}
                            onClick={() => { setBoardSelect(group) }}
                        >
                            <h2>{group.name}</h2>
                        </div>
                    )
                })}
                <button
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
                        <button className="border border-green-800 bg-green-500"
                        >new state</button>
                        <StateBoard
                            dataStates={boardSelect?.states}
                        ></StateBoard>
                    </div>) : null}
            </div>
        </>
    )
}