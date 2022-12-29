import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LangContext from "../contexts/LangContext";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <>
      <hr />
      Footer
      <div>Active Theme : {theme}</div>
      <div>Active Language : {lang}</div>
      <button onClick={toggleTheme}>Change Theme</button>
    </>
  );
}

export default Footer;
