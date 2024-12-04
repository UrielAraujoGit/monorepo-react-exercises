import { TTask } from "../types/board.type";

export const Tasks = (props: {dataTask: Array<TTask>}) => {

    return (
        <>
            <div>
                {props.dataTask.map(itemtask => {
                    return(
                        <div key={itemtask.id}>
                            <h3>{itemtask.name}</h3>
                            <></>
                        </div>                       
                    )
                })}
            </div>
        </>
    )
}