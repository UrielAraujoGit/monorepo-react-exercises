import { getBoards, getStates, getSubtasks, getTasks } from "./api/api.service";
import "./App.css";

function App() {
  const boards = getBoards();
  console.log(boards);

  const states = getStates(1);
  console.log(states);

  const tasks = getTasks(2, 1);
  console.log(tasks);

  const subtasks = getSubtasks(2, 1, 1);
  console.log(subtasks);

  return (
    <>
      <h1 className="text-center text-3xl">Task Management</h1>
    </>
  );
}

export default App;
