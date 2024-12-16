import "./App.css";
import { useState } from "react";
import { TElementNumber } from "./elementNumber.type.ts/elementNumber.type";
import CardElementNumber from "./component/CardElementNumber";

function App() {
  const [listaElementsNum, setlistaElementsNum] = useState<
    Array<TElementNumber>
  >([]);

  const fnSumarClicks = (item: number) => {
    const nuevoClick = { idNum: crypto.randomUUID(), num: item };

    const nuevaListaElementsNum = [ nuevoClick,...listaElementsNum];
    setlistaElementsNum(nuevaListaElementsNum);
    return nuevoClick;
  };

  return (
    <>
      <h1 className="text-center text-3xl">Click Machine</h1>
      <section>
        <button
          onClick={(e) => {
            fnSumarClicks(listaElementsNum.length + 1);
          }}
        >
          Click me!
        </button>
      </section>
      <section>
        {listaElementsNum.length ? (
          <div className="justify-items-end bg-slate-400">
            {listaElementsNum.map((item) => (
              <CardElementNumber
                key={item.idNum}
                unElemNum={item}
              ></CardElementNumber>
            ))}
          </div>
        ) : null}
      </section>
    </>
  );
}

export default App;

// Objetivos: Crear una aplicación donde al darle click a un botón, se genere un elemento con un numero entero de forma incremental

// Requerimientos: Se requiere una vista con un botón, que al darle click, se genere un elemento html en la vista, y que este tenga como contenido un numero

// Criterios de aceptación:
// Que exista un botón con el texto "Click me!"
// Que al darle click al btn genere un elemento nuevo en el nevagador
// El contenido del elemento debe ser un número
// Cada vez que se clickee el btn, se debe generar un nuevo elemento, a la izquierda del anterior
// La lista de elementos debe empezar por el número 1

// Notas técnicas:
// Los estilos del proyecto no se tendrán en cuenta
// Seguir los lineamientos de git de la tarea épica ( la tarea padre de esta tarea )
// NO es necesario crear un MR ( merge request ) en git
// El nombre del proyecto será "click-machine"
