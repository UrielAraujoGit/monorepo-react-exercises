import "./App.css";
import { ContainerJobs } from "./components/container-jobs/container-jobs";

function App() {
  return (
    <>
      <main>
        <header className="bg-green-400 h-12 w-full"></header>
        <section>
          <ContainerJobs></ContainerJobs>
        </section>
      </main>
    </>
  );
}

export default App;
