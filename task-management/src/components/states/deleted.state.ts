import { TBoard } from "../../utils/boards.type";

export const deleteState = (
  id: number,
  boardSelected: number,
  setBoards: (value: React.SetStateAction<TBoard[]>) => void,
) => {
  setBoards(prevBoards =>
  prevBoards.map(board =>
    board.id === boardSelected
      ? {
          ...board,
          states: board.states.filter(state => state.id !== id)
        }
      : board
  )
);

};
