import { useContext, useState } from "react"
import { BoardsContext } from "../board-context/boards.context"

export const NewStateModal = (
    props: {
        fnOnOffBtnNewState: () => void,

    }) => {

    const [addNameState, setAddNameState] = useState('')
    const [addBgColor, setAddBgColor] = useState('#00bcd4')
    const { fnNewState } = useContext(BoardsContext)

    const handleAddState = () => {
        fnNewState(addNameState, addBgColor);
        setAddNameState('');
        setAddBgColor('#00bcd4')
    }

    return (
        <>
        <div
        className="form_velo"
        onClick={()=>props.fnOnOffBtnNewState()}
        ></div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAddState();
                    props.fnOnOffBtnNewState()
                }}
            >
                <h2 className="mb-2 text-xl">Add a new State</h2>
                <input
                    className="border border-sky-800 text-gray-900 m-1 rounded-md"
                    type="text"
                    placeholder="Colum Name"
                    value={addNameState}
                    onChange={(e) => setAddNameState(e.currentTarget.value)}
                />
                <input 
                type="color"
                placeholder="#00bcd0"
                name="" 
                id=""
                value={addBgColor}
                onChange={(e)=> setAddBgColor(e.currentTarget.value)}
                className="border-2 border-indigo-400 h-8 rounded-md m-2 w-16 p-0"
                />
                <button
                    className="border-2 border-indigo-400 h-8 rounded-md m-2"

                >ADD</button>
                <button
                    className="border-2 border-indigo-400 h-8 rounded-md m-2"
                    type="reset"
                    onClick={() => props.fnOnOffBtnNewState()}
                >Cancel</button>
            </form>
        </>
    )
}