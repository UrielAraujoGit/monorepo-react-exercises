import { useState } from "react"
// import { fnNewBoars } from "./boards"

export const NewBoardModal = (props: { fnCancel: () => void; addNewBoars: (nameNewBoard: string) => void }) => {

    const [nameNewBoard, setNameNewBoard] = useState('')

    return (
        <>
            <div>
                <input
                    className="border border-sky-800"
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
                     }}
                >ADD</button>
                <button
                    className="border border-green-800"
                    onClick={() => { props.fnCancel() }}
                >Cancel</button>
            </div>
        </>
    )
}