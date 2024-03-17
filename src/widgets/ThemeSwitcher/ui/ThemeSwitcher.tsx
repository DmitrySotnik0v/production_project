import { FC } from 'react';

import { Theme, useTheme } from 'app/providers/ThemeProviders';

import { classNames } from 'shared/lib/classNames';
import IconTheme from 'shared/assents/icons/theme.svg';
import { Button } from 'shared/ui';

import { ThemeButton } from 'shared/ui/Button/Button';

import style from './ThemeSwitcher.module.scss';

interface ThemeSwitcher {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcher> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(style.themeSwitcher, {}, [className])}
    >
      <IconTheme className={theme === Theme.NORMAl ? style.svg : ''} />
    </Button>
  );
};
