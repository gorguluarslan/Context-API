import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <hr />
      Footer
      <div>Active Theme : {theme}</div>
      <button onClick={toggleTheme}>Change Theme</button>
    </>
  );
}

export default Footer;
