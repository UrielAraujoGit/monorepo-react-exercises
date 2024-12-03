import "./App.css";
import { Boards } from "./components/boards";
import { dataTemporaly } from "./utils/data-model";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl">Task Management</h1>
      <Boards
      dataBoards={dataTemporaly}></Boards>
    </>
  );
}

export default App;
