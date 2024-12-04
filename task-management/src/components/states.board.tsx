import { TState } from "../types/board.type";
import { Tasks } from "./tasks";


export const StateBoard = (props: { dataStates: Array<TState> }) => {

    return (
        <>
            <div>
                {props.dataStates.map((colums) => {
                    return (
                        <div
                            className="state-columns"
                            style={{ "background": colums.color }}
                            key={colums.id}
                        >
                            <h3>{colums.name}</h3>
                            <Tasks dataTask={colums.tasks}></Tasks>
                        </div>
                    )
                })}
                <button
                    className="border border-emerald-800 bg-emerald-500"
                >➕ task</button>
            </div>
        </>
    )
}