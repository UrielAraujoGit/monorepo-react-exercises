import { useContext } from "react";
import { BoardsContext } from "../board-context/boards.context";

export const ModalTasks = (props: {
    fnShowTaskModal: () => void,
    stateId: number
    taskId: number,

}) => {
    const { boardSelected, boards } = useContext(BoardsContext);

    const board = boards.find((b) => b.id === boardSelected);
    const state = board?.states.find((s) => s.id === props.stateId);
    const taskShow = state?.tasks?.find((item)=> item.id === props.taskId)


    return (
        <>
            <div className="form_velo"
            onClick={()=>props.fnShowTaskModal()}
            ></div>
            <div className="form absolute translate-x-1/4 translate-y-1/4 ">
                <h3
                className="text-xl m-2">{taskShow?.name}</h3>
                <ul>
                    {taskShow?.subtasks.map((sub) => (
                        <li
                        key={sub.id}
                        className="m-1"
                        >
                            <h4 className="text-lg"
                            >{sub.name}</h4>
                            <p className="text-sm"
                            >{sub.completed? "Completed": "No Completed" }</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}