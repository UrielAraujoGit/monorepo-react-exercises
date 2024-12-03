import { useState } from "react";
import "./App.css";
import CardNumber from "./component/cardnumber";
function App() {
  const [listaNumeros, setListaNumeros] = useState<Array<number>>([]);
  return (
    <div>
      <h1 className="text-center text-3xl">click machine</h1>
      <button
        className="border bg-slate-500 px-2 py-1 rounded-lg"
        onClick={(e) => {
          const nuevoNum = listaNumeros.length + 1;
          const listaNueva = [nuevoNum, ...listaNumeros];
          setListaNumeros(listaNueva);
        }}
      >
        botton
      </button>
      <h1 className="flex flex-wrap">
        {listaNumeros.map((a) => {
          return <CardNumber key={a} num={a}></CardNumber>;
        })}
      </h1>
    </div>
  );
}

export default App;
