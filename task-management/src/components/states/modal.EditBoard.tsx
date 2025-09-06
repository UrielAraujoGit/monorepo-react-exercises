import { useContext, useState } from "react";
import { BoardsContext } from "../board-context/boards.context";

type Item = {
    value: string;
    id: number;
};


export const EditBoardModal = (props: {
    fnShowEditModalModal: () => void,

}) => {
    const { boardSelected, boards, fnChangeStateName, fnChangeNameBoard, deleteState } = useContext(BoardsContext);

    const board = boards.find((b) => b.id === boardSelected);
    const [stateList, setStateList] = useState<Item[]>([])
    const [nameBoard, setNameBoard] = useState<string>('')
    const [deployDeletState, setDeployDeletState] = useState(false)
    const [stateDeleteId, setStateDeleteId] = useState<number>(0)

    const handleChangeNameState = (id: number, newValue: string) => {
        const isId = stateList.find(item => item.id === id)
        if (isId) {
            setStateList(
                (prev) => prev.map((item) =>
                    item.id === id
                        ? { ...item, value: newValue }
                        : item
                )
            );
        } else {
            setStateList(
                (prev) => [
                    ...prev,
                    { id: id, value: "" },
                ]);
        }
    };

    const fnChangeList = () => {
        stateList.map((item) => {
            fnChangeStateName(item.value, item.id)
        })
    }

    const handleChangeNameBoard = () => {
        fnChangeNameBoard(nameBoard != '' ? nameBoard : board!.name)
    }

    const handledeltedState = (id:number) =>{ deleteState(id); setDeployDeletState(!deployDeletState)}
    return (
        <>
            <div className="form_velo"
                onClick={() => props.fnShowEditModalModal()}
            ></div>
            <form action="form absolute translate-x-1/4 translate-y-1/4"
                onSubmit={(e) => {
                    e.preventDefault();
                    fnChangeList()
                    handleChangeNameBoard()
                    
                }}
            >
                <h3 className="text-xl m-2">Edit: {board?.name}</h3>
                <input
                    className="p-1"
                    type="text"
                    placeholder={board?.name}
                    onChange={(e) => { setNameBoard(e.currentTarget.value) }}
                />
                <ul>
                    {board?.states.map((state) => (
                        <li
                            key={state.id}
                            className="flex gap-2 m-1"
                        >
                            <div>
                                <input type="text"
                                    className="m-2 p-1"
                                    placeholder={state.name}
                                    onChange={(e) => {
                                        handleChangeNameState(state.id, e.currentTarget.value)
                                    }}

                                />
                                <button
                                    onClick={() => {setStateDeleteId(state.id);
                                        setDeployDeletState(!deployDeletState)}}
                                >❌</button>
                                
                            </div>
                        </li>
                    ))}
                </ul>
                {deployDeletState
                                    ? <div>
                                        <button onClick={() => setDeployDeletState(!deployDeletState)}>cancel</button>
                                        <button
                                        onClick={()=> handledeltedState(stateDeleteId)}
                                        >DELETE</button>
                                    </div>
                                    : null
                                }


                <button
                    type="submit"
                    className="border-2 border-indigo-400 h-8 rounded-md m-2"
                    onClick={() => { props.fnShowEditModalModal() }}
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