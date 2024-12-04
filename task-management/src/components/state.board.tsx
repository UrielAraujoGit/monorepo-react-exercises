import { TState } from "../types/board.type";


export const StateBoard = (props: {dataStates: Array<TState>}) => {
    
    return(
        <>
        {props.dataStates.map((colums)=>{
            return (

                <div 
                className="state-columns"
                style={ {"background":colums.color}}
                key={colums.id}
                >
                    <h3>{colums.name}</h3>
                </div>
            )
        })}
        </>
    )
}