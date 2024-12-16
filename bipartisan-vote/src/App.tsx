import { useState } from "react";
import "./App.css";
import { candidates, TCandidato } from "./schemas/candidato.type";
import { CardCandidato } from "./component/cardCandidato";


function App() {
  const [listaCandidatos, SetListaCandidatos] = useState<Array<TCandidato>>(candidates)
  function conteoVoto() {

  }
  
  return (
    <>
      <h1 className="text-center text-3xl">Bipartisan Vote</h1>
        {listaCandidatos.map((c)=> 
      <section key={c.name}>
        <CardCandidato
        candidatin={c}
        fnSumarVoto={()=>{}}>
        </CardCandidato>
      </section>
        )}
    </>
  );
}

export default App;



// Objetivos: Crear una aplicación donde se pueda votar a 2 candidatos. 
 
// Requerimientos: Los nombres de los candidatos aparecerán en pantalla y se los podrá clickear. Al hacer click sobre un candidato, 
// el sistema aumentará la cantidad de votos de ese candidato en 1. 
// La cantidad de votos para cada candidato debe aparecer por debajo de su nombre


// Criterios de aceptación: 
// Que existan 2 botones con el nombre de cada candidato ( batman, superman )
// Que cada candidato tenga 0 votos por defecto
// Que al darle click al nombre de un candidato, el conteo de votos de ese candidato aumente en 1


