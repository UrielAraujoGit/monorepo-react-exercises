import { useContext } from "react";
import { ThemeContext } from "../theme/theme";

export const Item = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <p>El color del tema es: {themeContext?.theme}</p>
      <button onClick={() => themeContext?.setTheme?.("dorado")}>
        Cambiar a tema dorado
      </button>
    </div>
  );
};
