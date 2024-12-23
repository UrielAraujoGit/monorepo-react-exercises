import { useState } from "react";
import { TState, TSubTask } from "../../types/board.type";
import { Tasks } from "../tasks&subtasks/tasks";
import { StateModal } from "./newstate.modal";
import { TaskModal } from "../tasks&subtasks/newtask.modal";
import "./state.style.css";


export const StateBoard = (props: 
    { dataStates: Array<TState>,
        addNewState:(nameNewState:string) => void,
        fnNewId:()=>void,
        idToDo:number,
        fnNewTasks:(addNameTask:string, addSubTasks:Array<TSubTask>)=>void
        
     }) => {
    const [ btnNewStateModal, setBtnNewStateModal ] = useState(false)
    
    const onOffBtnStateModal = () => {setBtnNewStateModal(!btnNewStateModal)}
    
    // task modal and functions

    const [ btnNewTaskModal, setBtnNewTaskModal ] = useState(false)
    
    const onOffBtnTaskModal = () => {setBtnNewTaskModal(!btnNewTaskModal)}

    
    return (
        <>
            <button
                    className="border border-emerald-800 bg-emerald-500 text-gray-700 m-1 btn-new-task"
                    onClick={()=>{onOffBtnTaskModal()}}
                    >➕ task</button>
            <div className="state-container">
            <button 
            className="border border-green-800 bg-green-500 text-gray-700 m-1"
            onClick={()=>{onOffBtnStateModal()}}
            >new state</button>
            {btnNewStateModal ?
                    (<StateModal
                        fnOnOffModal={onOffBtnStateModal}
                        addNewStateModal={props.addNewState}
                    ></StateModal>
                    ) : null}
            <div className="state-columns-container">
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
                
            </div>
            {btnNewTaskModal? 
            <TaskModal
            fnOnOffBtnTaskModal={onOffBtnTaskModal}
            fnNewId={props.fnNewId}
            idToDo={props.idToDo}
            fnNewTasks={props.fnNewTasks}
            ></TaskModal>
            : null}
            </div>
        </>
    )
}