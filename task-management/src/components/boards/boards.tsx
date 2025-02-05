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
      <section>
        {boards.map((item) => {
          return (
            <div
              className="cursor-pointer text-2xl text-stone-700"
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
          className="bg-blue-700 px-4 py-2 rounded-r-4xl"
          onClick={() => { props.fnBtnOnOffNewBoard() }}>
          + New Board
        </button>
      </section>
      <StateComponent>

      </StateComponent>
    </>
  )
}