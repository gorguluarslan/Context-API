import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ChangeTheme() {
  const data = useContext(ThemeContext);
  console.log(data);
  return (
    <div>
      <button>ChangeTheme</button>
    </div>
  );
}

export default ChangeTheme;
