import { useContext, useState } from "react";
import { BoardsContext } from "../board-context/boards.context";
import { TaskComponent } from "../tasks/tasks";
import { NewStateModal } from "./modal.state";
import { TBoardsContext } from "../board-context/boards-contex.type";
import { NewTaskModal } from "../tasks/modal.newtasks";

export const StateComponent = () => {
  const { boards, boardSelected } = useContext<TBoardsContext>(BoardsContext);

  const boardShow = boards.find((b) => b.id === boardSelected);

  const [onOffBtnNewState, setOnOffBtnNewState] = useState(false);
  const [onOffBtnNewTask, setOnOffBtnNewTask] = useState(false);

  const fnOnOffBtnNewState = () => {
    setOnOffBtnNewState(!onOffBtnNewState);
  };
  const fnOnOffBtnNewTask = () => {
    setOnOffBtnNewTask(!onOffBtnNewTask);
  };

  const cantCol = boardShow?.states.length? boardShow?.states.length + 1 : 4;

  return (
    <>
      
      <div className="grid grid-cols-5 h-16 bg-gray-700">
        <h2 className="col-span-4 text-2xl content-center m-4">
          {boardShow?.name}
        </h2>
        <div className="col-start-5 col-end-6 content-center">
          <button
            className="bg-indigo-500 px-4 py-2 rounded-3xl"
            onClick={() => fnOnOffBtnNewTask()}
          >
            +Add New Task
          </button>
        </div>
      </div>
      <div className="flex" 
       style={{ display: 'grid', gridTemplateColumns: `repeat(${cantCol}, 1fr)` }}
      >
        {boardShow?.states.map((item) => (
          <div key={item.id} style={{ background: item.color }}>
            <h3 className="m-4">{item.name} {`(`}{item.tasks.length}{`)`}</h3>
            <TaskComponent stateId={item.id}></TaskComponent>
          </div>
        ))}
        <button
          onClick={() => {
            fnOnOffBtnNewState();
          }}
        >
          {" "}
          + STATE{" "}
        </button>
      </div>
      {onOffBtnNewState ? (
        <NewStateModal fnOnOffBtnNewState={fnOnOffBtnNewState}></NewStateModal>
      ) : null}
      {onOffBtnNewTask ? (
        <NewTaskModal fnOnOffBtnNewTask={fnOnOffBtnNewTask}></NewTaskModal>
      ) : null}

    </>
  );
};
