import { useContext, useState } from "react"
import { TSubTask } from "../../utils/boards.type"
import { BoardsContext } from "../board-context/boards.context"

export const NewTaskModal = (props: {
    fnOnOffBtnNewTask: () => void,

}) => {

    const { fnNewId, idToDo, fnNewTasks } = useContext(BoardsContext);

    const [taskName, setTaskName] = useState("");
    const [subTasks, setSubTasks] = useState<TSubTask[]>([]);
    const [subTaskName, setSubTaskName] = useState("");

    // Manejo de nueva sub-tarea
    const handleAddSubTask = () => {
        if (subTaskName.trim() === "") {
            alert("El nombre de la sub-tarea no puede estar vacío.");
            return;
        }

        if (subTasks.some((task) => task.name === subTaskName)) {
            alert("La sub-tarea ya existe.");
            return;
        }

        fnNewId();
        setSubTasks([...subTasks, { id: idToDo, name: subTaskName, completed: false }]);
        setSubTaskName("");
    };

    return (
        <>
            <div
            className="form_velo"
            onClick={()=>props.fnOnOffBtnNewTask()}
            ></div>
            <form
                className="flex flex-col new-task-form"
                onSubmit={(e) => {
                    e.preventDefault(); // Evita la recarga de la página

                    if (taskName.trim() === "") {
                        alert("El nombre de la tarea no puede estar vacío.");
                        return;
                    }

                    fnNewTasks(taskName, subTasks);
                    props.fnOnOffBtnNewTask();
                }}
            >
                <h2 className="mb-2 text-xl">Add a new Task and subtasks</h2>
                <input
                    className="border border-sky-800 text-gray-900 rounded-md m-1"
                    type="text"
                    placeholder="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <fieldset>
                <h2 className="mb-2 text-xl">Subtasks</h2>
                
                <ul>
                    {subTasks.map((subTask) => (
                        <li key={subTask.id}>{subTask.name}</li>
                    ))}
                </ul>

                <input
                    className="border border-sky-800 text-gray-900 rounded-md m-1"
                    type="text"
                    placeholder="SUB-Task Name"
                    value={subTaskName}
                    onChange={(e) => setSubTaskName(e.target.value)}
                />
                
                <button className="border-2 border-indigo-400 h-8 rounded-md m-2"
                    type="button" 
                    onClick={handleAddSubTask}>
                    + Sub Task
                </button>
                </fieldset>
                <button 
                    className="border-2 border-indigo-400 h-8 rounded-md m-2"
                    type="submit">
                    ADD Task
                </button>

                <button 
                className="border-2 border-indigo-400 h-8 rounded-md m-2" 
                type="button" 
                onClick={props.fnOnOffBtnNewTask}>
                    Cancel
                </button>
            </form>
        </>
    );
};