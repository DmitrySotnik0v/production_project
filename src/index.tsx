import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'shared/config/i18n/i18n';

import { Suspense } from 'react';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';

import ThemeProvider from './app/providers/ThemeProviders/ui/ThemeProvider';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense fallback="">
          <App />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
