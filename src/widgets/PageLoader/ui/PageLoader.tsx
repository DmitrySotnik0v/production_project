import React from 'react';

import { Loader } from 'shared/ui';

import style from './PageLoader.module.scss';

const PageLoader = () => (
  <div className={style.pageLoader}>
    <Loader />
  </div>
);

export default PageLoader;
