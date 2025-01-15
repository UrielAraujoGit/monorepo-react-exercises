import { useContext } from "react";
import { ThemeContext } from "../theme/theme";
import { Item } from "./item";

export const Container = () => {
  const { theme, setTheme } = useContext(ThemeContext) ?? {};
  return (
    <div>
      <button
        onClick={() => setTheme?.(theme === "light" ? "dark" : "light")}
        className="text-2xl"
      >
        {theme === "dark" ? "🌙" : "☀"}
      </button>
      <Item></Item>
    </div>
  );
};
