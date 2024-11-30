import { useState } from "react";
import "./App.css";

function App() {
  const [cantidad, setcantidad] = useState(0);
  return (
    <div>
      <h1 className="text-center text-3xl">click machine</h1>
      <h1 className="allign justify-self-cente">{cantidad}</h1>
      <button
        onClick={(e) => {
          const cantidadnueva = cantidad + 1;
          console.log(cantidad);
          setcantidad(cantidadnueva)
        }}
      >
        botton
      </button>
    </div>
  );
}

export default App;
