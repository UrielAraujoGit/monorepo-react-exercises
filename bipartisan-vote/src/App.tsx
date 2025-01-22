import "./App.css";
import { ComponenteCandidato } from "./candidatoComponent";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl">bipartisan vote</h1>
      <ComponenteCandidato nombre="BATMAN" ></ComponenteCandidato>
      <ComponenteCandidato nombre="SUPERMAN"></ComponenteCandidato>
      
    </>
  );
}



export default App;
