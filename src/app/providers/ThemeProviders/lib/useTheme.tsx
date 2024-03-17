import { useContext } from 'react';

import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme } from './ThemeContext';

interface IUseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.NORMAl : Theme.DARK;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
