import { TTask } from "../../types/board.type";
import { SubTasks } from "./subtasks";
import "./tasks.style.css"

export const Tasks = (props: {dataTask: Array<TTask>}) => {

    return (
        <>
            <div className="task-container">
                {props.dataTask.map(itemtask => {
                    return(
                        <div key={itemtask.id}
                        className="task-card cursor-pointer"
                        onClick={()=>{}}
                        >
                            <h3>{itemtask.name}</h3>
                            <p>{itemtask.subtasks.length} substasks</p>
                            <SubTasks
                            dataSubTasks={itemtask.subtasks}></SubTasks>
                        </div>                       
                    )
                })}
            </div>
        </>
    )
}