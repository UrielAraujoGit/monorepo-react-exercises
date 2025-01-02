import { useState } from "react";
import { TBoard } from "../../types/board.type";
import { StateBoard } from "../states/states.board";
import { dataTemporaly } from "../../utils/data-model";
import { NewBoardModal } from "../board/newboard.modal";
import { fnNewBoards } from "../board/fnnewboards";
import { fnNewState } from "../states/fnnewstate";
import { fnNewTasks } from "../tasks&subtasks/fnnewtasks";
import menuIcon from "../../public/icons/menu-icon.png"
import { MenuBoardModal } from "./menuboard.modal";
import { fnEditMenuBoard, fnOrderColumns } from "./fnmenuboard";

export const Boards = () => {
  const [boards, setBoards] = useState<Array<TBoard>>(dataTemporaly);
  const [boardSelectedId, setBoardSelectedId] = useState<number | null>(1);
  const [btnNewBoard, setBtnNewBoard] = useState<boolean>(false);
  const [idToDo, setIdToDo] = useState(100);

  const boardSelect = boards.find((board) => board.id === boardSelectedId);
  
  const fnNewId = () => {
    setIdToDo(idToDo + 1);
  };

  const fnCancelModal = () => {
    setBtnNewBoard(!btnNewBoard);
  };

  // data & methods to state

  const states = boardSelect?.states || [];

  //menu board selected
  const [ menuBoardModal, setMenuModalBoard ] = useState(false)
  const fnSetMenuModalBoard = () => { setMenuModalBoard(!menuBoardModal) }

  return (
    <>
      <div className="app-container">
        <div className="asideBoardSelected">
          {boards.map((group) => {
            return (
              <div
                className="cursor-pointer list-boards"
                key={group.id}
                onClick={() => {
                  setBoardSelectedId(group.id);
                }}
              >
                <h2>{group.name}</h2>
              </div>
            );
          })}
          <button
            className="border border-slate-400 rounded-md m-1 p-1 btn-new_board"
            onClick={() => {
              setBtnNewBoard(!btnNewBoard);
            }}
          >
            NEW BOARD
          </button>
          {btnNewBoard ? (
            <NewBoardModal
              fnCancel={fnCancelModal}
              addNewBoars={(nameNewBoard) =>
                fnNewBoards(nameNewBoard, fnNewId, idToDo, boards, setBoards)
              }
            ></NewBoardModal>
          ) : null}
        </div>
        <div className="board-container">
          {boardSelect ? (
            <div className="border bg-slate-400">
              <div className="board-title-container">
                <button
                  className="btn-menu-board"
                  onClick={fnSetMenuModalBoard}
                >
                  <img src={menuIcon} alt="manu icon" />
                </button>
                <h3
                  className="board-title"
                >{boardSelect?.name}</h3>
              </div>
              {menuBoardModal? 
              (<div><MenuBoardModal
                boardSelected={boardSelect}
                fnSetMenuModalBoard={fnSetMenuModalBoard}
                fnOrderColumns={() => fnOrderColumns}
                setBoards={setBoards}
                boardSelectedId={boardSelectedId||1}
                boards={boards}
                fnEditMenuBoard={()=> fnEditMenuBoard}
              ></MenuBoardModal></div>) : null }
              
              <StateBoard
                dataStates={boardSelect?.states}
                addNewState={(nameNewState) => fnNewState(
                  nameNewState,
                  states,
                  fnNewId,
                  idToDo,
                  setBoards,
                  boardSelectedId
                )}
                fnNewId={fnNewId}
                idToDo={idToDo}
                fnNewTasks={(nameNewTask, addSubTasks) => fnNewTasks(
                  nameNewTask,
                  addSubTasks,
                  boardSelect,
                  fnNewId,
                  idToDo,
                  setBoards,
                  boardSelectedId
                )}>
              </StateBoard>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
