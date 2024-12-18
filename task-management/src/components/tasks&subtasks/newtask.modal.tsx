import { useState } from "react";
import { TSubTask } from "../../types/board.type";

export const TaskModal = (props: { 
    fnOnOffBtnTaskModal:()=>void,
    fnNewId:()=>void,
    idToDo:number,
    fnNewTasks:(addNameTask:string, addSubTasks:Array<TSubTask>)=>void
    
}) => {
    
    const [addNameTask, setAddNameTask] = useState<string>('')
    const [addSubTasks, setAddSubTasks] = useState<Array<TSubTask>>([])
    const [ addNames, setAddNames ] = useState('')
    
    
    const moreSubTask = () =>{
        const existName = addSubTasks.some(item => item.name === addNames)
        if (existName) {
            alert("la sub tarea ya existe")
            return
        }
        props.fnNewId()
        const subs: TSubTask = {
            id: props.idToDo,
            name: addNames,
            completed: false
        }
        setAddSubTasks([...addSubTasks, subs])

    }

    
    return (
        <>
            <div 
            className="flex flex-col w-52"
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
                    onClick={() => props.fnNewTasks(addNameTask, addSubTasks)}
                >ADD Task</button>
                <button
                    className="border border-green-800"
                    onClick={() => { props.fnOnOffBtnTaskModal() }}
                >Cancel</button>
            </div>
        </>
    )
}