import { useContext, useState } from "react";
import { BoardsContext } from "../board-context/boards.context";

export const EditBoardModal = (props: {
    fnShowEditModalModal: () => void,
    

}) => {
    const { boardSelected, boards, } = useContext(BoardsContext);
   

    const board = boards.find((b) => b.id === boardSelected);
    

    

    return (
        <>
            <div className="form_velo"
                onClick={() => props.fnShowEditModalModal()}
            ></div>
            <form action="form absolute translate-x-1/4 translate-y-1/4"
                onSubmit={(e) => {
                    e.preventDefault();
                                            
                    props.fnShowEditModalModal();
                    
                }}
            >
                <h3 className="text-xl m-2">Edit: {board?.name}</h3>
                <ul>
                    {board?.states.map((state) => (
                        <li
                            key={state.id}
                            className="flex gap-2 m-1"
                        >
                            <h4 className="text-lg">{state.name}</h4>
                            
                        </li>
                    ))}
                </ul>

                <select
                    className="m-2"
                    name="" id=""
                    
                    >
                    {board?.states.map((stateref) => {
                        return (
                            <option key={stateref.id} value={stateref.id} >{stateref.name}</option>

                        )
                    })}
                </select>
                <button
                    type="submit"
                    className="border-2 border-indigo-400 h-8 rounded-md m-2"
                    onClick={() => { }}
                >Apply Changes</button>
                <button
                    type="reset"
                    className="border-2 border-indigo-400 bg-indigo-400 text-gray-700 h-8 rounded-md m-2"
                    onClick={() => {

                        props.fnShowEditModalModal()

                    }}
                >Cancel</button>
            </form>

        </>
    )
}