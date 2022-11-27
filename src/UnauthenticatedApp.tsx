import { Navigate, Route, Routes } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from './config/constants';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

const UnauthenticatedApp = () => {
  const navigate = useNavigate();

  const switchAuth = (route: string): void => {
    navigate(route);
  };
  console.log('Render UnauthenticatedApp');
  return (
    <section className="unauthenticated-app">
      <Routes>
        <Route path={ROUTES.login} element={<LoginPage switchAuth={switchAuth} />} />
        <Route
          path={ROUTES.register}
          element={<RegisterPage switchAuth={switchAuth} />}
        />
        <Route path="*" element={<Navigate to={ROUTES.login} replace />} />
      </Routes>
    </section>
  );
};

export default UnauthenticatedApp;
