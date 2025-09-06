import { TBoard } from "../../utils/boards.type";

export const fnChangeStateName = (
    nameState: string,
    idState: number,
    setBoards: (value: React.SetStateAction<TBoard[]>) => void,
    boardSelected: number,

) => {
    if (idState===0) {return}
    
    setBoards((prevBoards) => {
        return prevBoards.map((board) =>
            board.id === boardSelected ?
                {
                    ...board,
                    states: [...board.states.map(col =>
                        col.id == idState ? {
                            ...col, name: nameState
                        }
                            : col

                    )]
                }
                : board
        );
    });
}