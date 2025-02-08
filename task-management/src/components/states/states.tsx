import { useContext, useEffect, useState } from "react";
import { BoardsContext } from "../board-context/boards.context";
import { TBoard } from "../../utils/boards.type";
import { TaskComponent } from "../tasks/tasks";
import { NewStateModal } from "./modal.state";
import { TBoardsContext } from "../board-context/boards-contex.type";
import { NewTaskModal } from "../tasks/modal.newtasks";

export const StateComponent = () => {
  const { boards, boardSelected } = useContext<TBoardsContext>(BoardsContext);
  const [boardShow, setBoardShow] = useState<TBoard>();
  const [onOffBtnNewState, setOnOffBtnNewState] = useState(false);

  const [onOffBtnNewTask, setOnOffBtnNewTask] = useState(false);

  useEffect(() => {
    boards.map((item) => {
      if (item.id === boardSelected) {
        setBoardShow(item);
        console.log(" desde useEffect");
      }
      return;
    });
  }, [boardSelected, onOffBtnNewState]);

  const fnOnOffBtnNewState = () => {
    setOnOffBtnNewState(!onOffBtnNewState);
  };
  const fnOnOffBtnNewTask = () => {
    setOnOffBtnNewTask(!onOffBtnNewTask);
  };

  return (
    <>
      <section className="grid grid-cols-5 w-full">
        <h2 className="col-start-1 col-end-3 text-center text-2xl text-stone-700">
          {boardShow?.name}
        </h2>
        <div className="col-start-5 col-end-6 text-end">
          <button
            className="bg-blue-700 px-4 py-2 rounded-l-4xl"
            onClick={() => fnOnOffBtnNewTask()}
          >
            +Task
          </button>
        </div>
      </section>
      <section className="flex">
        {boardShow?.states.map((item) => (
          <div key={item.id} style={{ background: item.color }}>
            <h3 className="text-center">{item.name}</h3>
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
      </section>
      {onOffBtnNewState ? (
        <NewStateModal fnOnOffBtnNewState={fnOnOffBtnNewState}></NewStateModal>
      ) : null}
      {onOffBtnNewTask ? (
        <NewTaskModal fnOnOffBtnNewTask={fnOnOffBtnNewTask}></NewTaskModal>
      ) : null}
    </>
  );
};
