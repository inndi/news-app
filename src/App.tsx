import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import PagePreloader from './components/PagePreloader/PagePreloader';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { ROUTES } from './config/constants';
import { useAuth } from './contexts/authContext';
import Footer from './features/Footer/Footer';
import Header from './features/Header/Header';
import Modals from './features/Modals/Modals';
import HomePage from './pages/HomePage/HomePage';
import SavedArticlesPage from './pages/SavedArticlesPage/SavedArticlesPage';
import { useAppDispatch } from './redux/hooks';
import { fetchSavedArticles } from './redux/slices/savedArticlesSlice';

import './styles/app.scss';

const App = () => {
  const { isLoggedIn } = useAuth();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchSavedArticles());
    }
  }, [isLoggedIn]);

  console.log('App Render');
  return (
    <div className="app">
      <Header />
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
                {' '}
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
