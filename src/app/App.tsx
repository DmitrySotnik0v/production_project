import {  Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames";

import { AppRouter } from "./providers/router";

import { Theme } from "./providers/ThemeProviders/lib/ThemeContext";
import { useTheme } from "./providers/ThemeProviders/lib/useTheme";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [`${theme}`])}>
      <Link to={"/"}>main</Link>
      <Link
        to={"/about"}
        style={{ display: "inline-block", marginLeft: "10px" }}
      >
        about
      </Link>
      <AppRouter/>
      <button onClick={toggleTheme}>
        {theme === Theme.DARK ? Theme.NORMAl : Theme.DARK}
      </button>
    </div>
  );
};

export default App;
