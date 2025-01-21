import { useState } from "react";
import "./App.css";

function App() {
  const [listaDeNumeros, setListaDeNumeros] = useState<Array<number>>([]);
  return (
    <>
      <button
        onClick={() => {
          setListaDeNumeros([...listaDeNumeros, listaDeNumeros.length + 1])
          
        }}
        className="text-center text-2xl rounded-xl bg-slate-500"
      >
        Click Me!
      </button>
    {listaDeNumeros.map((elem)=>{return <p key={elem}>{elem}</p> 
    })}   </>
  );
}

export default App;
