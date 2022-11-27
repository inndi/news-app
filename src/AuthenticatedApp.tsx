import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';

import { ROUTES } from './config/constants';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound/NotFound';
import { store } from './redux/store';

const AuthenticatedApp = () => {
  console.log('Render AuthenticatedApp');
  return (
    <Provider store={store}>
      <Routes>
        <Route path={ROUTES.main} element={<MainPage />} />
        <Route path={ROUTES.notFound} element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default AuthenticatedApp;
