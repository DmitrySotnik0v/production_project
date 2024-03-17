import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "shared/config/i18n/i18n";

import App from "./app/App";

import ThemeProvider from "./app/providers/ThemeProviders/ui/ThemeProvider";
import { Suspense } from "react";

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback="">
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
