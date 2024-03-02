import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import { classNames } from "shared/lib/classNames";

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>
        {theme === Theme.DARK ? Theme.NORMAl : Theme.DARK}
      </button>
    </div>
  );
};

export default App;
