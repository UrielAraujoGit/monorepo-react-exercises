import { TBoard } from "../types/board.type"


export const Boards = (props: {dataBoards: Array<TBoard>}) => {

    return (
        <>
        <div className="asideBoardSelected">
        {props.dataBoards.map((group) => {
            return(
                <div key={group.id}>
                    <h2>{group.name}</h2>
                </div>
            )
        })}
        <button>NEW BOARD</button>
        
        </div>
        </>
    )
}