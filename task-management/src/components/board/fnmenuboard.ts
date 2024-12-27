import { TBoard, TState } from "../../types/board.type";


export const fnOrderColumns = (
    column: TState,
    showBoard:TBoard,
    setShowBoard:React.Dispatch<React.SetStateAction<TBoard>>,
    setBoards:React.Dispatch<React.SetStateAction<TBoard[]>>,
    boardSelectedId: number,
    boards: TBoard[]
    
) => {
        
        const newColumns = [...showBoard.states];
        const currentIndex = newColumns.indexOf(column);
            
        if (currentIndex > 0) {
            [newColumns[currentIndex - 1], newColumns[currentIndex]] = 
            [newColumns[currentIndex], newColumns[currentIndex - 1]];
        }
    
        
        setShowBoard((prev) => ({
            ...prev,
            states: newColumns
        }));
        
        console.log(newColumns)
        
        setBoards((prevBoards) => {
            return prevBoards.map((board) =>
              board.id === boardSelectedId
                ? { ...board, states: newColumns }
                : board
            );
        });

        console.log(boards)
    };
