import { useContext } from "react";
import { Container } from "./container";
import { ThemeContext } from "../theme/theme";

export const Page = () => {
  const themeContextValue = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full ${
        themeContextValue?.theme === "dark" ? "bg-slate-950" : "bg-slate-300"
      }`}
    >
      <h1 className="text-center text-3xl text-white">color theme</h1>
      <Container></Container>
    </div>
  );
};
