import { useContext } from "react"
import { BoardsContext } from "../board-context/boards.context"
import { NewBoardModal } from "./newboard.modal"
import { StateComponent } from "../states/states"
import { TBoardsContext } from "../board-context/boards-contex.type"

export const Boards = (props: {
  fnBtnOnOffNewBoard: () => void,
  btnOnOffNewBoard: boolean,
}
) => {
  const { boards, setBoardSelected, } = useContext<TBoardsContext>(BoardsContext)

  return (
    <>
      <section className="grid grid-cols-5 ">
        <div className="col-start-1 bg-gray-700">
          <h1 className="h-16 p-3 content-center ">TASK MANAGEMENT</h1>
          <h3 className="col-start-1  my-2 mx-4">ALL BOARDS {`(`}{boards.length}{`)`}</h3>
        {boards.map((item) => {
          return (
            <div
              className="col-start-1 cursor-pointer text-2xl  my-2 mx-1"
              key={item.id}
              onClick={() => {
                setBoardSelected(item.id);
              }}
            >
              <h2>{item.name}</h2>
            </div>
          );
        })}
        
          {props.btnOnOffNewBoard ?
            (<NewBoardModal></NewBoardModal>)
            : null}
          <button
            className="text-2xl bg-indigo-500 px-4 py-2 rounded-r-full my-2"
            onClick={() => { props.fnBtnOnOffNewBoard() }}>
            + New Board
          </button>
        </div>
        <div className="col-start-2 col-end-6">
      <StateComponent>
      </StateComponent>
      </div>
      </section>
    </>
  )
}