import { useContext, useState } from "react"
import { TSubTask } from "../../utils/boards.type"
import { BoardsContext } from "../board-context/boards.context"

export const NewTaskModal =  (props: {
    fnOnOffBtnNewTask: () => void,

}) => {

    const {fnNewId, idToDo, fnNewTasks} = useContext(BoardsContext)

    const [addNameTask, setAddNameTask] = useState<string>('')
    const [addSubTasks, setAddSubTasks] = useState<Array<TSubTask>>([])
    const [addNames, setAddNames] = useState('')


    const moreSubTask = () => {
        if (addNames.trim() === ''){
            alert("la sub tarea ya existe")
            return
        }
        const existName = addSubTasks.some(item => item.name === addNames)
        if (existName) {
            alert("la sub tarea ya existe")
            return
        }
        fnNewId()
        const subs: TSubTask = {
            id: idToDo,
            name: addNames,
            completed: false
        }
        setAddSubTasks([...addSubTasks, subs])

    }


    return (
        <>
            <div className="new-task-modal-container">
                <div
                    className="flex flex-col new-task-form"
                >
                    <input
                        className="border border-sky-800 text-gray-900 rounded-md m-1"
                        type="text"
                        placeholder="Task Name"
                        value={addNameTask}
                        onChange={(e) => setAddNameTask(e.target.value)}
                    />
                    <ul>
                        {addSubTasks.map(item => {
                            return (
                                <li
                                    key={item.id}
                                >{item.name}</li>
                            )
                        })}
                    </ul>
                    <input
                        className="border border-sky-800 text-gray-900 rounded-md m-1"
                        type="text"
                        placeholder="SUB-Task Name"
                        value={addNames}
                        onChange={(e) => setAddNames(e.target.value)} />
                    <button
                        className="border border-green-800"
                        onClick={() => {
                            moreSubTask();
                            setAddNames('')
                        }}
                    >+ Sub Task</button>
                    <button
                        className="border border-green-800"
                        onClick={() => {
                            fnNewTasks(addNameTask, addSubTasks)
                            props.fnOnOffBtnNewTask()
                        }}
                    >ADD Task</button>
                    <button
                        className="border border-green-800"
                        onClick={() => { props.fnOnOffBtnNewTask() }}
                    >Cancel</button>
                </div>
            </div>
        </>
    )
}