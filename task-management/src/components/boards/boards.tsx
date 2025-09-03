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
  const { boards, setBoardSelected } = useContext<TBoardsContext>(BoardsContext)
  
  return (
    <>
      <section className="grid grid-cols-5 h-screen">
        <div className="col-start-1 bg-gray-700">
          <h1 className="h-16 p-3 content-center ">TASK MANAGEMENT</h1>
          <h3 className="col-start-1  my-2 mx-4 text-ms font-light">ALL BOARDS {`(`}{boards.length}{`)`}</h3>
        {boards.map((item) => {
          return (
            <div
              className="col-start-1 cursor-pointer text-xl  my-4 mx-1 font-bold board_hover"
              key={item.id}
              onClick={() => {
                setBoardSelected(item.id);
              }}
            >
              <h2>{item.name}</h2>
            </div>
          );
        })}
        
          <button
            className="text-xl font-semibold py-2 rounded-r-full my-2 mx-1 board_hover"
            onClick={() => { props.fnBtnOnOffNewBoard() }}>
            +Create New Board
          </button>
          {props.btnOnOffNewBoard ?
            (
              <NewBoardModal
              fnBtnOnOffNewBoard={props.fnBtnOnOffNewBoard}></NewBoardModal>
            )
            : null}
        </div>
        <div className="col-start-2 col-end-6 h-screen">
      <StateComponent>
      </StateComponent>
      </div>
      </section>
    </>
  )
}