import { useContext, useState } from "react";
import { BoardsContext } from "../board-context/boards.context";

const {boards, setBoards, boardSelected } = useContext(BoardsContext)

export const fnChangeOfState = (
    subTaskId: number, 
    iscompleted: boolean,
    stateId: number,
    taskId: number,

) => {
    const [newBoards, setNewBoards] = useState(boards)
    
    


    setNewBoards((prevBoards) => {
        return prevBoards.map((board) =>
            board.id === boardSelected
                ? {
                      ...board,
                      states: board.states.map((state) =>
                          state.id === stateId
                              ? {
                                    ...state, state
                                    
                                    ),
                                }
                              : state
                      ),
                  }
                : board
        );
    });
}