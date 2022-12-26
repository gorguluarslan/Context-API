import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const values = {
    theme,
    setTheme,
  };

  return <ThemeContextProvider value={values}>{children}</ThemeContextProvider>;
};

export default ThemeContext;
