import ChangeTheme from "./components/ChangeTheme";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <ChangeTheme />
    </ThemeContextProvider>
  );
}

export default App;
