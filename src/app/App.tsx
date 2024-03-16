import {  Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames";

import { NavBar } from "widgets/NavBar";

import { AppRouter } from "./providers/router";

import { Theme } from "./providers/ThemeProviders/lib/ThemeContext";
import { useTheme } from "./providers/ThemeProviders/lib/useTheme";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [`${theme}`])}>
      <NavBar/>
      <AppRouter/>
    </div>
  );
};

export default App;
