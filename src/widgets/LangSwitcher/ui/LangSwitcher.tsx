import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";

import { Button } from "shared/ui";
import { ThemeButton } from "shared/ui/Button/Button";

import style from "./LangSwitcher.module.scss";

interface LangSwitcher {
  className?: string;
}

const LangSwitcher: FC<LangSwitcher> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const translate = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(style.langSwitcher, {}, [className])}
      onClick={translate}
      theme={ThemeButton.CLEAR}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
