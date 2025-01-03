import { useState } from "react"
import { TBoard, TState } from "../../types/board.type"
import { fnEditMenuBoard, fnOrderColumns } from "./fnmenuboard"

export const MenuBoardModal = (
    props: { boardSelected: TBoard,
        fnSetMenuModalBoard:()=>void,
        fnOrderColumns:()=>void,
        setBoards: React.Dispatch<React.SetStateAction<TBoard[]>>,
        boardSelectedId: number
        boards:TBoard[]
        fnEditMenuBoard:()=>void
     }
) => {

    const [ showBoard, setShowBoard ] = useState(props.boards[props.boardSelectedId - 1])
    // const fnOrderColumns = (column: TState) => {
        
    //     const newColumns = [...showBoard.states];
    //     const currentIndex = newColumns.indexOf(column);
            
    //     if (currentIndex > 0) {
    //         [newColumns[currentIndex - 1], newColumns[currentIndex]] = 
    //         [newColumns[currentIndex], newColumns[currentIndex - 1]];
    //     }
    
    //     setShowBoard((prev) => ({
    //         ...prev,
    //         states: newColumns
    //     }));
    // };

    const [ nameBoard, setNameBoarld ] = useState('')
    
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