import { useState } from "react";
import { TSubTask, TTask } from "../../types/board.type";

export const EditTaskModal = (props: {
    taskSelectedToEdit: TTask,
    fnEditTaskOnOff:()=>void

}) => {

    const [showTaskSelected, setshowTaskSelected] = useState<TTask>(props.taskSelectedToEdit)


    return (
        <>
            <div className="new-task-modal-container">
                <div
                    className="flex flex-col new-task-form"
                >
                    <input
                        className="border border-sky-800 text-gray-900 rounded-md m-1"
                        type="text"
                        placeholder={showTaskSelected.name}
                        onChange={() => { }}
                    />
                    <ul>
                        {showTaskSelected.subtasks.map(item => {
                            return (
                                <li
                                    key={item.id}
                                >   
                                    <input type="checkbox"></input>
                                    <input
                                        className="border border-sky-800 text-gray-900 rounded-md m-1"
                                        type="text"
                                        placeholder={item.name}

                                         />
                                </li>
                            )
                        })}
                    </ul>

                    <button
                        className="border border-green-800"
                        
                    >EDIT Task</button>
                    <button
                        className="border border-green-800"
                        onClick={() => props.fnEditTaskOnOff()}
                    >Cancel</button>
                </div>
            </div>
        </>
    )
}