import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [votobatman, setvotobatman] = useState(0);
  const [votosuperman, setvotosuperman] = useState(0);
  return (
    <>
      <h1 className="text-center text-3xl">bipartisan vote</h1>
      <div
        onClick={(e) => {
          setvotosuperman(votosuperman + 1);
        }}
      >
        Superman
      </div>
      <div>{votosuperman}</div>
      <div
        onClick={(e) => {
          setvotobatman(votobatman + 1);
        }}
      >
        batman
      </div>
      <div>{votobatman}</div>
    </>
  );
}

export default App;
