import { useEffect } from "react";
import "./App.css";
import { getApiRandomImgs } from "./services/api.service";

function App() {
  const getRandomImgs = async () => {
    const imgs = await getApiRandomImgs();
    console.log(imgs);
  };

  useEffect(() => {
    getRandomImgs();
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl">unsplash</h1>
    </>
  );
}

export default App;
