import { FC } from "react";
import { Link } from "react-router-dom";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui";

import { AppLinkTheme } from "shared/ui/AppLink/AppLink";

import style from "./NavBar.module.scss";

interface NavBar {
  className?: string;
}

export const NavBar: FC<NavBar> = ({ className }) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={style.linksWrapper}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={style.mainLink}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>About</AppLink>
      </div>
    </div>
  );
};
