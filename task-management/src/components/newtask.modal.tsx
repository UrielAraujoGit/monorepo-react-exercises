import { useState } from "react";

export const TaskModal = (props: {fnOnOffBtnTaskModal:()=>void}) => {

    const [ addNameTask, setAddNameTask ] = useState<string>('')



    return (
        <>
            <div>
                 <input
                        className="border border-sky-800 text-gray-900 rounded-md m-1"
                        type="text"
                        placeholder="Colum Name"
                        value={addNameTask}
                        onChange={(e) => setAddNameTask(e.target.value)}
                    />
                    <button
                        className="border border-green-800"
                        onClick={() => { }}
                    >ADD</button>
                    <button
                        className="border border-green-800"
                        onClick={() => {props.fnOnOffBtnTaskModal()}}
                    >Cancel</button>
            </div>
        </>
    )
}