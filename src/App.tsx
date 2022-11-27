import { lazy, Suspense } from 'react';

import PagePreloader from './components/PagePreloader/PagePreloader';
import { useAuth } from './contexts/authContext';

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'));

const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Suspense fallback={<PagePreloader />}>
      {isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
};

export default App;
