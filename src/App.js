import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { appRoutes } from "routes";

const App = () => {
  const renderAppRoutes = (routes) => {
    return routes.map((route) => (
      <Route
        key={route.meta.name}
        path={route.path}
        element={route.component}
        exact
      />
    ));
  };

  return (
    <React.Fragment>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <Routes>{renderAppRoutes(appRoutes)}</Routes>
    </React.Fragment>
  );
};

export default App;
