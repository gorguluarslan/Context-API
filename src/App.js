import ChangeLang from "./components/ChangeLang";
import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import { LangContextProvider } from "./contexts/LangContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <LangContextProvider>
      <ThemeContextProvider>
        <ChangeTheme />
        <hr />
        <ChangeLang />
        <Footer />
      </ThemeContextProvider>
    </LangContextProvider>
  );
}

export default App;
