import { useContext, useEffect, useState } from "react"
import { TSubTask } from "../../utils/boards.type"
import { BoardsContext } from "../board-context/boards.context"

export const SubTasksComponent = (
    props: {
        subtasks: TSubTask[],
    }
) => {

    const [subtaskShow, setSubtaskShow] = useState<Array<TSubTask>|null>()

    const {boardSelected} = useContext(BoardsContext)

    useEffect(()=>{
            setSubtaskShow(props.subtasks)
        }, [boardSelected])

    return (
        <>
        <ul>
            {subtaskShow?.map(item =>
                <li
                key={item.id}
                >{item.name}</li>
            )}
        </ul>
        </>
    )
}