import { useEffect } from "react";
import { TContactList } from "../models/contacts-list.type";


export const ListaAvtives = (
    props: { 
        newList: TContactList,
        fnIsActive:(key:string, keyValue:boolean)=>void,
        restList: Array<string>,
        moreContactFlag:boolean
    }
) => {

    
    
        

    return (
        <>
            <ul className="m-4 flex border rounded-lg gap-2">
                {Object.entries(props.newList)
                    .filter(([, isActive]) => isActive)
                    .slice(0, 4)
                    .map(([key, isActive]) =>
                        isActive ? (
                            <li 
                                key={key}
                                onClick={()=> props.fnIsActive(key, isActive)}
                                >
                                <img
                                    className="border-cyan-800 rounded-full"
                                    src={`https://picsum.photos/100/100?random`}
                                    alt="Avatar de contacto" />
                                <p className="">{key}</p>
                            </li>
                        ) : null
                    )}
                {props.moreContactFlag? (<li className="bg-slate-500 rounded-full w-24 h-24">
                    <h3
                    className="text-center align-middle"
                    > + </h3>
                    <div className="hidden hover:flex hover:flex-col">
                    {props.restList.map(item =>
                        <span key={item}>{item}</span>
                    )}
                    </div>  
                </li>)
                :  null}
            </ul>
        </>
    )
}