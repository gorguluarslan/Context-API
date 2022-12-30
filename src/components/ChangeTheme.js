import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function ChangeTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div>Active Theme: {theme} </div>
      <button onClick={toggleTheme}>ChangeTheme</button>
    </div>
  );
}

export default ChangeTheme;
