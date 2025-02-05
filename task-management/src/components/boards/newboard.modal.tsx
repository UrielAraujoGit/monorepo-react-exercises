import { useContext, useState } from "react"
import { BoardsContext } from "../board-context/boards.context"
import { TBoardsContext } from "../board-context/boards-contex.type";

export const NewBoardModal = () => {

    const { fnNewBoards } = useContext<TBoardsContext>(BoardsContext)

    const [newNameBoard, setNewNameBoard] = useState('');

    const handleAddBoard = () => {
        fnNewBoards(newNameBoard)
        setNewNameBoard('')
    };



    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleAddBoard()
            }
            }>
                <label>
                    <input type="text"
                        value={newNameBoard}
                        onChange={(e) => { setNewNameBoard(e.currentTarget.value) }}
                    />
                </label>
                <button>ADD</button>
            </form>
        </>
    )
}