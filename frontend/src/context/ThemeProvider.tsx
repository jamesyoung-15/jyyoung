import { ThemeContext } from "./ThemeContext";
import { useState, useEffect } from "react";
import type { Themes } from "./ThemeContext";
import type { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Themes>("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Apply the theme class to the <html> element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark-theme", "light-theme");
    root.classList.add(theme === "dark" ? "dark-theme" : "light-theme");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
