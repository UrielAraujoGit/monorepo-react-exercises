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
            }
            className="m-3 text-center"
            >
                <label >
                    <input 
                        type="text"
                        value={newNameBoard}
                        onChange={(e) => { setNewNameBoard(e.currentTarget.value) }}
                        className="border-2 border-indigo-400 h-8 rounded-md"
                    />
                </label>
                <button
                    className="border-2 border-indigo-400 h-8 rounded-md m-2"
                >ADD</button>
            </form>
        </>
    )
}