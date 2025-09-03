import { useContext, useState } from "react"
import { BoardsContext } from "../board-context/boards.context"
import { TBoardsContext } from "../board-context/boards-contex.type";


export const NewBoardModal = (props: {
    fnBtnOnOffNewBoard:()=>void,
}) => {

    const { fnNewBoards } = useContext<TBoardsContext>(BoardsContext)

    const [newNameBoard, setNewNameBoard] = useState('');

    const handleAddBoard = () => {
        fnNewBoards(newNameBoard)
        setNewNameBoard('')
        props.fnBtnOnOffNewBoard()
    };



    return (
        <>
            <div
            className="form_velo"
            onClick={()=>props.fnBtnOnOffNewBoard()}
            ></div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleAddBoard()
            }
            }
            className="m-3 text-center"
            >
                <h2 className="mb-2 text-xl">Add a new Board</h2>
                <label >
                    <input 
                        type="text"
                        value={newNameBoard}
                        onChange={(e) => { setNewNameBoard(e.currentTarget.value) }}
                        className="border-2 border-indigo-400 h-8 rounded-md"
                        placeholder="board name"
                    />
                </label>
                <button
                    className="border-2 border-indigo-400 h-8 rounded-md m-2"
                    
                >ADD</button>
                <button
                    className="border-2 border-indigo-400 h-8 rounded-md m-2"
                    type="reset"
                    onClick={()=>{props.fnBtnOnOffNewBoard()}}
                >Cancel</button>
            </form>
        </>
    )
}