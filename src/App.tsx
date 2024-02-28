import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { ManePageAsync } from "./pages/MainPage/MainPage.async";

import { Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

import "./styles/index.scss";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {

  const {theme,toggleTheme}=useTheme()

  return (
      <div className={classNames('app',{},[`${theme}`])}>
      <Link to={"/"}>main</Link>
      <Link
        to={"/about"}
        style={{ display: "inline-block", marginLeft: "10px" }}
      >
        about
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ManePageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      <button onClick={toggleTheme} >{theme===Theme.DARK ? Theme.NORMAl : Theme.DARK}</button>
    </div>
  );
};

export default App;
