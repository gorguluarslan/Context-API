import ChangeTheme from "./components/ChangeTheme";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <ChangeTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
