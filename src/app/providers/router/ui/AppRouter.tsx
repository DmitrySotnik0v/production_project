import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map((item, index) => (
          <Route key={index} path={item.path} element={
            <div className="page-wrapper">
              {item.element}
            </div>
          } />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
