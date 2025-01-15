import { useContext } from "react";
import { Container } from "./container";
import { ThemeContext } from "../theme/theme";

export const Page = () => {
  const themeContextValue = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full ${getBgColor(
        themeContextValue?.theme || ""
      )}`}
    >
      <h1 className="text-center text-3xl text-white ">color theme</h1>
      <Container></Container>
    </div>
  );
};

const getBgColor = (color: string) => {
  switch (color) {
    case "pink":
      return "bg-pink-600";
    case "green":
      return "bg-green-600";
    case "purple":
      return "bg-purple-600";
    case "blue":
      return "bg-blue-600";
    case "red":
      return "bg-red-600";
    case "dark":
      return "bg-slate-900";
    case "golden":
      return "bg-yellow-700";
    case "light":
    default:
      return "bg-slate-350";
  }
};
