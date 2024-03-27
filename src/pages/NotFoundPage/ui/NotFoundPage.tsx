import React from 'react';
import { useTranslation } from 'react-i18next';

import style from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={style.notFound}>{t('Страница не найдена')}</div>
  );
};

export default NotFoundPage;
