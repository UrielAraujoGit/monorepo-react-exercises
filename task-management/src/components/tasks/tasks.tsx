import { useContext } from "react";
import { BoardsContext } from "../board-context/boards.context";
import { SubTasksComponent } from "../subtasks/subtasks";

export const TaskComponent = (props: { stateId: number }) => {
  const { boardSelected, boards } = useContext(BoardsContext);

  //   const [tasksShow, setTasksShow] = useState<TTask[] | null>();

  //   useEffect(() => {
  //     setTasksShow(props.tasksForState);
  //   }, [boardSelected]);
  const board = boards.find((b) => b.id === boardSelected);
  const state = board?.states.find((s) => s.id === props.stateId);
  const tasksShow = state?.tasks;
  console.log("boards", boards);

  return (
    <>
      <ul>
        {tasksShow?.map((item) => (
          <li className="w-96" key={item.id}>
            <h4 className="ml-4">{item.name}</h4>
            <SubTasksComponent subtasks={item.subtasks}></SubTasksComponent>
          </li>
        ))}
      </ul>
    </>
  );
};
