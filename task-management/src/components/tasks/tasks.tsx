import { useContext, useEffect, useState } from "react"
import { BoardsContext } from "../board-context/boards.context"
import { TTask } from "../../utils/boards.type"
import { SubTasksComponent } from "../subtasks/subtasks"

export const TaskComponent = (
    props: {
        tasksForState: TTask[]
    }
) => {

    const { boardSelected } = useContext(BoardsContext)
    
    const [ tasksShow, setTasksShow ] = useState<TTask[]|null>()
    
    useEffect(()=>{
        setTasksShow(props.tasksForState)
        
    }, [boardSelected])

    return (
        <>
        <ul>
        {tasksShow?.map(item =>
            <li
            className="w-96"
            key={item.id}>
                <h4
                className="ml-4"
                >{item.name}</h4>
                <SubTasksComponent
                subtasks={item.subtasks}
                >

                </SubTasksComponent>
            </li>
        )}
        </ul>
        </>
    )
}