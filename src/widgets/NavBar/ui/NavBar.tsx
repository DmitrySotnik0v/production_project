import { FC } from 'react';

import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui';

import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import style from './NavBar.module.scss';

interface INavBar {
  className?: string;
}

export const NavBar: FC<INavBar> = ({ className }) => (
  <div className={classNames(style.navbar, {}, [className])}>
    <div className={style.linksWrapper}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={style.mainLink}>
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
    </div>
  </div>
);
