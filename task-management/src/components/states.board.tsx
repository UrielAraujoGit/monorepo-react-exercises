import { useState } from "react";
import { TState } from "../types/board.type";
import { Tasks } from "./tasks";
import { StateModal } from "./newstate.modal";


export const StateBoard = (props: 
    { dataStates: Array<TState>,
        addNewState:(nameNewState:string) => void,
        
     }) => {
    const [ btnNewStateModal, setBtnNewStateModal ] = useState(false)
    
    const onOffBtnStateModal = () => {setBtnNewStateModal(!btnNewStateModal)}

    
    return (
        <>
            <div>
            <button 
            className="border border-green-800 bg-green-500"
            onClick={()=>{onOffBtnStateModal()}}
            >new state</button>
            {btnNewStateModal ?
                    (<StateModal
                        fnOnOffModal={onOffBtnStateModal}
                        addNewStateModal={props.addNewState}
                        
                    ></StateModal>
                    ) : null}
            </div>
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