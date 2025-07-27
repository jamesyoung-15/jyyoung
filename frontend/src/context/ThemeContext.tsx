import { createContext } from "react";

export type Themes = "dark" | "light";

interface ThemeContextProps {
  theme: Themes;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);
