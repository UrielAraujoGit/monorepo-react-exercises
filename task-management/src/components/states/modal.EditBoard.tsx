import { useContext, useEffect, useState } from "react";
import { BoardsContext } from "../board-context/boards.context";

type Item = {
    value: string;
    id: number;
};


export const EditBoardModal = (props: {
    fnShowEditModalModal: () => void,

}) => {
    const { boardSelected, boards, fnChangeStateName } = useContext(BoardsContext);

    const board = boards.find((b) => b.id === boardSelected);
    const [stateList, setStateList] = useState<Item[]>([])
    // const [nameState, setNameState] = useState<string>('')
    // const [idState, setIdState] = useState<number>(0)


    const handleChange = (id: number, newValue: string) => {
        setStateList((prev) =>
             prev.map((item) => (item.id === id ? { ...item, value: newValue } : item))
        );
        console.log(stateList)
    };

    const fnChangeList = () => {
        stateList.map(({value, id}) => {
            fnChangeStateName(value, id)
        })
        console.log(stateList)
    }

    return (
        <>
            <div className="form_velo"
                onClick={() => props.fnShowEditModalModal()}
            ></div>
            <form action="form absolute translate-x-1/4 translate-y-1/4"
                onSubmit={(e) => {
                    e.preventDefault();
                    fnChangeList()


                }}
            >
                <h3 className="text-xl m-2">Edit: {board?.name}</h3>
                <ul>
                    {board?.states.map((state) => (
                        <li
                            key={state.id}
                            className="flex gap-2 m-1"
                        >
                            <div>
                                <input type="text"
                                    placeholder={state.name}
                                    onChange={(e) => {
                                        handleChange(state.id, e.currentTarget.value)
                                    }}

                                />
                                <button>❌</button>
                            </div>
                        </li>
                    ))}
                </ul>


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