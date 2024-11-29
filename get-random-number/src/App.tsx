import { useState } from "react";
import "./App.css";

function App() {
  const [numeroRandom, setNumeroRandom] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setNumeroRandom((Math.random() * 10000))
        }}
        className="bg-green-500"
      >
        <p>{numeroRandom}</p>
        random number
      </button>
    </>
  );
}

export default App;
