import { useState } from "react";
import "./App.css";
import Cardnumber from "./component/cardnumber";
function App() {
  const [cantidad, setcantidad] = useState(0);
  const arraynuevo: number[] = [numero];
  return (
    <div>
      <h1 className="text-center text-3xl">click machine</h1>
      <h1 className="allign justify-self-cente">
        {arraynuevo.map((a) => {
          return <Cardnumber number={undefined}></Cardnumber>;
        })}
      </h1>
      <button
        onClick={(e) => {
          const cantidadnueva = cantidad + 1;

          console.log(cantidad);

          setcantidad(cantidadnueva);

          arraynuevo.push(cantidad);
        }}
      >
        botton
      </button>
    </div>
  );
}

export default App;
