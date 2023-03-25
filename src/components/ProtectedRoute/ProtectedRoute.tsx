import { Navigate } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import { useAuth } from '../../contexts/authContext';
import { useAppDispatch } from '../../redux/hooks';
import { MODAL_IDS, openModal } from '../../redux/slices/modalsSlice';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn } = useAuth();

  const dispatch = useAppDispatch();

  const handleRedirectAuth = () => {
    dispatch(
      openModal(MODAL_IDS.login, {
        title: 'Sign in',
        redirectText: 'Sign up',
      }),
    );
  };

  if (!isLoggedIn) {
    handleRedirectAuth();
    return <Navigate to={ROUTES.main} />;
  }
  return children;
};

export default ProtectedRoute;
