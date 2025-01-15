import { useContext } from "react";
import { ThemeContext } from "../theme/theme";

export const Item = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <p>El color del tema es: {themeContext?.theme}</p>
      <button className="border-2 px-2 py-1 rounded" onClick={() => themeContext?.setTheme?.("golden")}>
        Cambiar a tema dorado
      </button>

      <button className="border-2 px-2 py-1 rounded" onClick={() => themeContext?.setTheme?.("red")}>
        Cambiar a tema rojo
      </button>

      <button className="border-2 px-2 py-1 rounded" onClick={() => themeContext?.setTheme?.("blue")}>
        Cambiar a tema azul
      </button>


      <button className="border-2 px-2 py-1 rounded" onClick={() => themeContext?.setTheme?.("purple")}>
        Cambiar a tema morado
      </button>



      <button className="border-2 px-2 py-1 rounded" onClick={() => themeContext?.setTheme?.("green")}>
        Cambiar a tema verde
      </button>



      <button className="border-2 px-2 py-1 rounded" onClick={() => themeContext?.setTheme?.("pink")}>
        Cambiar a tema rosa
      </button>

      
    </div>
  );
};
