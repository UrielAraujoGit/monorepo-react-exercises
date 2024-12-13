import { useState } from "react";
import "./App.css";
import { getRandomColorRgb } from "./utils/get-random-color.util";
import { HistoryContainer } from "./components/history/history-container";
import { TColor } from "./schema/color.type";

function App() {
  const [color, setColor] = useState("");

  const [history, setHistory] = useState<Array<TColor>>([]);

  const selectColor = (a: string) => {
    setColor(a);
    const obj_color: TColor = { id: history.length, rgb: a };
    setHistory([...history, obj_color]);
  };

  return (
    <>
      <section
        style={{ backgroundColor: color }}
        className="w-screen h-screen "
      >
        <h1 className="flex text-center justify-center items-center py-5">
          <button
            onClick={() => {
              const new_color = getRandomColorRgb();
              selectColor(new_color);
            }}
            className="border border-gray-600 p-2 rounded-md"
          >
            Click me!
          </button>
        </h1>

        <HistoryContainer
          history={history}
          fnHandleSetColor={selectColor}
          fnHandleChangeColors={setHistory}
        ></HistoryContainer>
      </section>
    </>
  );
}

export default App;
