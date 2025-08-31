import { useContext } from "react";
import {dataTemporaly} from "../../models/datatemporaly";
import { TBoard } from "../../utils/boards.type";
import { BoardsContext } from "../board-context/boards.context";
import { TBoardsContext } from "../board-context/boards-contex.type";

const { boards, setBoards } = useContext<TBoardsContext>(BoardsContext)

export const conectionApi= () => {
    const data: string = JSON.stringify(dataTemporaly)
    if(localStorage.search('dataKanban') === undefined ) {
        localStorage.setItem('dataKanban', data)
    } else if (localStorage.search('dataKanban') != undefined ){
        const dataLocal = localStorage.getItem('dataKanban') || data
        setBoards(JSON.parse(dataLocal))
    }
}

export const setDataKanban = () => {
        const dataLocal: string = JSON.stringify(boards);
        localStorage.clear();
        localStorage.setItem('dataKanban', dataLocal);
}