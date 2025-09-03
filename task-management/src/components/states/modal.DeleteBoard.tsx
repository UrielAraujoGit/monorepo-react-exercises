import { useContext } from "react";
import { BoardsContext } from "../board-context/boards.context";
import { TBoardsContext } from "../board-context/boards-contex.type";

export const DeleteBoardModal = (
    props: {
        fnOnOffModalDelete: ()=> void,
        nameboard:string,
    }) => {
    const { deleteBoard } = useContext<TBoardsContext>(BoardsContext)

    const handleDelete = () =>{
        deleteBoard();
    }
    return (
        <>
        <div
        className="form_velo"
        onClick={()=>{props.fnOnOffModalDelete()}}
        ></div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleDelete();
                    props.fnOnOffModalDelete()
                }}
            >
                <h2 className="mb-2 text-xl">Are you sure you can delete the table: {props.nameboard}?</h2>
                <button
                    className="border-2 border-rose-600 h-8 rounded-md m-2"

                >DELETE</button>
                <button
                    className="border-2 border-indigo-400 h-8 rounded-md m-2"
                    type="reset"
                    onClick={() => {props.fnOnOffModalDelete()}}
                >Cancel</button>
            </form>
        </>
    )
}