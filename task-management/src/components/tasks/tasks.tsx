import { useContext, useState } from "react";
import { BoardsContext } from "../board-context/boards.context";
import { SubTasksComponent } from "../subtasks/subtasks";

export const TaskComponent = (props: { stateId: number }) => {
  const { boardSelected, boards } = useContext(BoardsContext);
  
  const board = boards.find((b) => b.id === boardSelected);
  const state = board?.states.find((s) => s.id === props.stateId);
  const tasksShow = state?.tasks;
  console.log("boards", boards);

  return (
    <>
      <ul>
        {tasksShow?.map((item) => (
          <li
            
            className="m-2 p-3 bg-slate-800 rounded-md" key={item.id}>
            <h4 className="m-1 cursor-pointer">{item.name}</h4>
            {/* <SubTasksComponent subtasks={item.subtasks}></SubTasksComponent> */}

            <p>
              {(Object.values(item.subtasks).filter(k => k.completed === true).length)}
              {' '} of {' '}
              {item.subtasks.length} sub-tasks
            </p>
            
          </li>
        ))}
      </ul>
    </>
  );
};
