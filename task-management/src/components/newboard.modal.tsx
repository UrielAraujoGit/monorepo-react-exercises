import { useState } from "react"
// import { fnNewBoars } from "./boards"

export const NewBoardModal = (props: { fnCancel: () => void; addNewBoars: (nameNewBoard: string) => void }) => {

    const [nameNewBoard, setNameNewBoard] = useState('')

    return (
        <>
            <div className="new-board-modal-container">
                <div className="new-board-bg">
                <input
                    className="border border-sky-800 text-gray-900 m-1 rounded-md new-board-input"
                    type="text"
                    placeholder="Board Name"
                    value={nameNewBoard}
                    onChange={(e) => setNameNewBoard(e.target.value)}
                />
                <button
                    className="border border-green-800"
                    onClick={() => { 
                        props.addNewBoars(nameNewBoard);
                        setNameNewBoard('')
                        props.fnCancel()
                     }}
                >ADD</button>
                <button
                    className="border border-green-800"
                    onClick={() => { props.fnCancel() }}
                >Cancel</button>
                </div>
            </div>
        </>
    )
}