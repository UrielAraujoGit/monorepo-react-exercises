import { useState } from "react"


export const StateModal = (props: {
    fnOnOffModal: () => void,
    addNewStateModal: (nameNewState: string) => void


}) => {
    const [addNameState, setAddNameState] = useState<string>('')

    return (
        <div className="new-state-modal-container">
            <div className="new-state-form">
                <input
                    className="border border-sky-800 text-gray-900 m-1 rounded-md"
                    type="text"
                    placeholder="Colum Name"
                    value={addNameState}
                    onChange={(e) => setAddNameState(e.target.value)}
                />
                <button
                    className="border border-green-800"
                    onClick={() => {
                        props.addNewStateModal(addNameState);
                        setAddNameState('')
                        props.fnOnOffModal()
                    }}
                >ADD</button>
                <button
                    className="border border-green-800"
                    onClick={() => { props.fnOnOffModal() }}
                >Cancel</button>
            </div>
        </div>
    )
}