import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  return <ThemeContextProvider value="light">{children}</ThemeContextProvider>;
};

export default ThemeContext;
