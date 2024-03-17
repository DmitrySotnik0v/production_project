import { FC, useState } from 'react';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

import { classNames } from 'shared/lib/classNames';

import style from './SideBar.module.scss';

interface SideBar {
  className?: string;
}

const SideBar: FC<SideBar> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(style.sideBar, { [style.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={style.switchersWrapper}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
};

export default SideBar;
