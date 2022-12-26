import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <ChangeTheme />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
