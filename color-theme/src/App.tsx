import { useState } from "react";
import "./App.css";
import { Page } from "./components/page";
import { ThemeContext } from "./theme/theme";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Page></Page>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
