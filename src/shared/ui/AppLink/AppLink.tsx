import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames";

import style from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLink extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLink> = ({
  className,
  theme = AppLinkTheme.PRIMARY,
  children,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={classNames(style.appLink, {}, [className, style[theme]])}
    >
      {children}
    </Link>
  );
};

export default AppLink;
