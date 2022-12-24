import ChangeTheme from "./components/ChangeTheme";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContext.Provider value="light">
        <ChangeTheme />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
