import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PagePreloader from './components/PagePreloader/PagePreloader';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { ROUTES } from './config/constants';
import Footer from './features/Footer/Footer';
import Modals from './features/Modals/Modals';
import HomePage from './pages/HomePage/HomePage';
import SavedArticlesPage from './pages/SavedArticlesPage/SavedArticlesPage';

import './styles/app.scss';

// TODO:  +? why App rerender ? because of dispatch hook
//  + APP shouldn't rerender never
const App = () => {
  console.log('App Render');

  // TODO:  + move header and footer here (cant move header because of background)
  return (
    <div className="app">
      <Routes>
        <Route
          path={ROUTES.savedNews}
          element={
            <ProtectedRoute>
              <SavedArticlesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.main}
          element={
            <>
              <HomePage />

              <Suspense fallback={<PagePreloader />}>
                <Modals />
              </Suspense>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
