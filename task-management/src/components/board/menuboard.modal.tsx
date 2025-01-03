import { useState } from "react"
import { TBoard, TState } from "../../types/board.type"
import { fnChangeNameBoard, fnEditMenuBoard, fnOrderColumns } from "./fnmenuboard"

export const MenuBoardModal = (
    props: { 
        boardSelected: TBoard,
        fnSetMenuModalBoard:()=>void,
        fnOrderColumns:()=>void,
        setBoards: React.Dispatch<React.SetStateAction<TBoard[]>>,
        boardSelectedId: number
        boards:TBoard[]
        fnChangeNameBoard:()=>void
        fnEditMenuBoard:()=>void
     }
) => {

    const boardShow = props.boards.find((item) => item.id === props.boardSelectedId)
    const [ showBoard, setShowBoard ] = useState(boardShow!)
   


    return (
        <>
            <div className="new-task-modal-container">
                <div
                    className="flex flex-col new-task-form"
                >
                    <input
                        className="border border-sky-800 text-gray-900 rounded-md m-1"
                        type="text"
                        placeholder={showBoard.name}
                        value={showBoard.name}
                        onChange={(e)=> {
                            const newName=(e.currentTarget.value);
                            fnChangeNameBoard(
                                newName,
                                props.boards,
                                setShowBoard,
                                showBoard
                            )  
                        }}
                    />
                    {showBoard.states.map((colums) => {
                        return (
                            <div key={colums.id}>
                                {showBoard.states.indexOf(colums)? 
                                <button
                                onClick={()=>{fnOrderColumns(
                                    colums,
                                    showBoard,
                                    setShowBoard,
                                )}}
                                >^up^</button>: null}
                            <input
                                type="text"
                                placeholder={colums.name}
                            />
                            </div>
                            )}
                    )}
                    <button
                        className="border border-green-800"
                        onClick={()=> {
                              
                            fnEditMenuBoard(
                                props.setBoards,
                                props.boardSelectedId,
                                showBoard
                            );
                            props.fnSetMenuModalBoard() }}
                    >Edit</button>
                    <button
                        className="border border-green-800"
                        onClick={()=> props.fnSetMenuModalBoard() }
                    >Cancel</button>
                </div>
            </div>
        </>
    )
}