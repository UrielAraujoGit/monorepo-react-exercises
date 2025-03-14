import { useContext, useState } from "react";
import { BoardsContext } from "../board-context/boards.context";
import { fnCompletedSubTasks } from "./fnchangesubtasks";

export const ModalTasks = (props: {
    fnShowTaskModal: () => void,
    stateId: number
    taskId: number,

}) => {
    const { boardSelected, boards, setBoards } = useContext(BoardsContext);

    const board = boards.find((b) => b.id === boardSelected);
    const state = board?.states.find((s) => s.id === props.stateId);
    const taskShow = state?.tasks?.find((item) => item.id === props.taskId)

    const [changeState, setChangeState] = useState<null | number>()

    const fnChangeSubtasks = (
        subTaskId: number, 
        iscompleted: boolean,
        stateId: number,
        taskId: number,
    ) => {
        fnCompletedSubTasks (subTaskId, iscompleted, stateId, taskId)
    }

    return (
        <>
            <div className="form_velo"
                onClick={() => props.fnShowTaskModal()}
            ></div>
            <form action="form absolute translate-x-1/4 translate-y-1/4"
                onSubmit={(e) => {
                    e.preventDefault();
                    props.fnShowTaskModal()
                }}
            >
                <h3 className="text-xl m-2">{taskShow?.name}</h3>
                <ul>
                    {taskShow?.subtasks.map((sub) => (
                        <li
                            key={sub.id}
                            className="flex gap-2 m-1"
                        >
                            {sub.completed
                                ? <input type="checkbox" name="" id="" checked 
                                onChange={() => { 
                                    fnChangeSubtasks(
                                        sub.id, 
                                        sub.completed,
                                        props.stateId, 
                                        props.taskId
                                    )}} />
                                : <input type="checkbox" name="" id="" 
                                onChange={() => { 
                                    fnChangeSubtasks(
                                        sub.id,
                                        sub.completed,
                                        props.stateId, 
                                        props.taskId
                                        )}} />
                            }

                            <h4 className="text-lg">{sub.name}</h4>
                            <p className="text-slate-400"> {sub.completed ? "completed" : "no completed"}</p>
                        </li>
                    ))}
                </ul>

                <select
                    className="m-2"
                    name="" id=""
                    onClickCapture={(e) => setChangeState(Number(e.currentTarget.value))}>
                    {board?.states.map((stateref) => {
                        return (
                            <option key={stateref.id} value={stateref.id} >{stateref.name}</option>

                        )
                    })}
                </select>
                <button
                    type="submit"
                    className="border-2 border-indigo-400 h-8 rounded-md m-2"
                    onClick={() => { }}
                >Apply Changes</button>
                <button
                    type="reset"
                    className="border-2 border-indigo-400 bg-indigo-400 text-gray-700 h-8 rounded-md m-2"
                    onClick={() => {

                        props.fnShowTaskModal()

                    }}
                >Cancel</button>
            </form>

        </>
    )
}