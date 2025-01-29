import { useState } from "react";
import "./App.css";
import { ICandidato } from "./ICandidato";

function App() {
  const [candidato, setCandidato] = useState("");
  const [listaDeCandidatos, setListaDeCandidatos] = useState<Array<ICandidato>>(
    []
  );

  return (
    <>
      <h1 className="text-center text-3xl">real vote</h1>
      <h5 className="text-center ">Lara no quiere hacer la tarea</h5>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setListaDeCandidatos([
            ...listaDeCandidatos,
            { nombre: candidato, voto: 1 },
          ]);
        }}
      >
        <input
          onChange={(event) => {
            setCandidato(event.target.value);
          }}
          type="text"
          placeholder="CANDIDATO CORRUPTO"
        ></input>
        <button>Añadir</button>
        <div></div>
      </form>
      {listaDeCandidatos.map((candidatoElegido) => {
        return (
          <div key={candidatoElegido.nombre}>
            <button
              onClick={() => {
                candidatoElegido.voto = candidatoElegido.voto + 1;
              }}
            >
              {candidatoElegido.nombre}
              {candidatoElegido.voto}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
