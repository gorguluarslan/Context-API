import { useTheme } from "../contexts/ThemeContext";
import { useLang } from "../contexts/LangContext";

function Footer() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLang();
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
