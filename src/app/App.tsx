import { useEffect } from 'react';

import { classNames } from 'shared/lib/classNames';

import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import { AppRouter } from './providers/router';

import { useTheme } from './providers/ThemeProviders/lib/useTheme';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (Math.random() > 0.5) {
      throw new Error();
    }
  }, []);

  return (

    <div className={classNames('app', {}, [`${theme}`])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>

  );
};

export default App;
