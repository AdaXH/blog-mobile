import { Route, Routes, HashRouter } from 'react-router-dom';
import routes from '@/config/router.config';
import { useLoadComponent } from '@/util/hooks';
import { Layout } from '@/layout';
import ReloadPrompt from './pro';

function RoutesApp() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {routes.map(({ Component, path }) => (
            <Route key={path} element={useLoadComponent(Component)} path={path} />
          ))}
        </Routes>
      </Layout>
      <ReloadPrompt />
    </HashRouter>
  );
}

export default RoutesApp;
