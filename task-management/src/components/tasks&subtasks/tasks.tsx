import { useState } from "react";
import { TTask } from "../../types/board.type";
import { SubTasks } from "./subtasks";
import "./tasks.style.css"
import { EditTaskModal } from "./tasksubtaskedit.modal";

export const Tasks = (props: { 
    dataTask: Array<TTask>
    
}) => {

    const [ editTask, setEditTask ] = useState(false)
    const [taskSelectId, setTaskSelectId] = useState<number|null>()
    const [ taskSelected, setTaskSelect ] = useState<TTask>()
    
    const fnEditTaskOnOff = () => { setEditTask(!editTask)}

    const fnTaskSelected = () => {
        props.dataTask.map(task => {
            if(task.id === taskSelectId) {
                console.log(task)
                setTaskSelect(task)
                fnEditTaskOnOff()
                return task
            }
        })
    }

    return (
        <>
            <div>
            {props.dataTask.map(itemtask => {
                return (
                    <div key={itemtask.id}
                        className="task-card cursor-pointer"
                        onClick={() => {
                            setTaskSelectId(itemtask.id)
                            fnTaskSelected()  
                            
                        }}
                    >
                        <h3>{itemtask.name}</h3>
                        <p>{itemtask.subtasks.length} substasks</p>
                        <SubTasks
                            dataSubTasks={itemtask.subtasks}></SubTasks>
                    </div>
                )
            })}
            </div>
            {editTask?
                <EditTaskModal
                taskSelectedToEdit={taskSelected!}
                fnEditTaskOnOff={fnEditTaskOnOff}
                ></EditTaskModal>
                : null
            }

        </>
    )
}