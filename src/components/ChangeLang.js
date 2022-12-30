import { useLang } from "../contexts/LangContext";

function ChangeLang() {
  const { lang, setLang } = useLang();
  return (
    <div>
      Active Language: {lang}
      <div>
        <button onClick={() => setLang("tr")}>TR</button>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("de")}>DE</button>
      </div>
    </div>
  );
}

export default ChangeLang;
