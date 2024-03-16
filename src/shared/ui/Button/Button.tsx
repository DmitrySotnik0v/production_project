import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/classNames";

import style from "./Button.module.scss";

export enum ThemeButton{
  CLEAR='clear'
}

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<Button> = ({ children, className, theme, ...props }) => {
  return (
    <button className={classNames(style.btn,{},[className,style[theme]])} {...props}>
      {children}
    </button>
  );
};

export default Button;
