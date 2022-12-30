import { useTheme } from "./contexts/ThemeContext";

import ChangeLang from "./components/ChangeLang";
import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";

const Container = () => {
  const { theme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      <ChangeTheme />
      <hr />
      <ChangeLang />
      <Footer />
    </div>
  );
};

export default Container;
