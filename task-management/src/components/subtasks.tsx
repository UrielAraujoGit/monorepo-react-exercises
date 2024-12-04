import { TSubTak as TSubTask } from "../types/board.type";

export const SubTasks = (props: { dataSubTasks: Array<TSubTask> }) => {

    return (
        <>
            <ul>
                {props.dataSubTasks.map(sub => {
                    return (
                        <li 
                        key={sub.id}
                        className={`subcompleted-`+sub.completed}
                        style={sub.completed? {"color":"green"} : {"color": "red"} }
                        >{sub.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

