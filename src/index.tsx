import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'shared/config/i18n/i18n';

import { Suspense } from 'react';
import App from './app/App';

import ThemeProvider from './app/providers/ThemeProviders/ui/ThemeProvider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback="">
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
