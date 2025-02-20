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
    const tasks = state?.tasks;
    const taskShow = tasks?.find((item)=> item.id = props.taskId)

    return (
        <>
            <div className="form_velo"></div>
            <div className="form">
                <h3>{taskShow?.name}</h3>
                <ul>
                    {taskShow?.subtasks.map((sub) => (
                        <li
                        key={sub.id}
                        >
                            <h4>{sub.name}</h4>
                            <p>{sub.completed? "Completed": "No Completed" }</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}