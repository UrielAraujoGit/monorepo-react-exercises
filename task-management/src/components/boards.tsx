import { useState } from "react"
import { TBoard } from "../types/board.type"
import { StateBoard } from "./state.board"


export const Boards = (props: { dataBoards: Array<TBoard> }) => {

    const [boardSelect, setBoardSelect] = useState<TBoard | null>(null)

    return (
        <>
            <div className="asideBoardSelected">
                {props.dataBoards.map((group) => {
                    return (
                        <div
                            key={group.id}
                            onClick={() => { setBoardSelect(group) }}
                        >
                            <h2>{group.name}</h2>
                        </div>
                    )
                })}
                <button>NEW BOARD</button>
            </div>
            <div className="board-container">
                {boardSelect ?
                    (<div>
                        <h3>{boardSelect?.name}</h3>
                        <StateBoard
                            dataStates={boardSelect?.states}
                        ></StateBoard>
                    </div>) : null}
            </div>
        </>
    )
}