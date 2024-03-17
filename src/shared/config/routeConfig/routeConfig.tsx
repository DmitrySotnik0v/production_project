import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RotePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RotePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RotePath.about,
    element: <AboutPage />,
  },
};
