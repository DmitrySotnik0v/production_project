import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map((item, index) => (
        <Route
          key={index}
          path={item.path}
          element={(
            <div className="page-wrapper">
              {item.element}
            </div>
          )}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
