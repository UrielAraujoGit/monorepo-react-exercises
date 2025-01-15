import { createContext } from "react";

export interface IThemeContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export const ThemeContext = createContext<IThemeContext | null>(null);
