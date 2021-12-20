import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from "@/config/router.config";
import { useLoadComponent } from "@/util/hooks";
import { Layout } from "@/layout";

function RoutesApp() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {routes.map(({ Component, path }) => (
            <Route
              key={path}
              element={useLoadComponent(Component)}
              path={path}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default RoutesApp;
