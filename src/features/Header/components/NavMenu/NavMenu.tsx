import { NavLink, useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button/Button';
import CloseIcon from '../../../../components/iconsComponents/CloseIcon';
import LogoutIcon from '../../../../components/iconsComponents/LogoutIcon';
import MenuIcon from '../../../../components/iconsComponents/MenuIcon';
import { ROUTES } from '../../../../config/constants';
import { useAuth } from '../../../../contexts/authContext';
import { useAppDispatch } from '../../../../redux/hooks';
import { MODAL_IDS, openModal } from '../../../../redux/slices/modalsSlice';
import { removeAllArticles } from '../../../../redux/slices/savedArticlesSlice';
import { scrollToTop } from '../../../../utils/generalUtils';

import './NavMenu.scss';

interface NavMenuProps {
  handleMenuIconClick: () => void;
  isDropdownOpen?: boolean;
}

const NavMenu = (props: NavMenuProps) => {
  const { isLoggedIn, logout, user } = useAuth();

  const { handleMenuIconClick, isDropdownOpen } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignInClick = () => {
    dispatch(
      openModal(MODAL_IDS.login, {
        title: 'Sign in',
        redirectText: 'Sign up',
      }),
    );
  };

  const onLogout = () => {
    logout();
    navigate(ROUTES.main);
    dispatch(removeAllArticles());
  };

  const handleNavClick = () => {
    isDropdownOpen && handleMenuIconClick();
  };

  const getIcon = () => {
    return isDropdownOpen ? (
      <CloseIcon className="nav-menu__close-icon" onClick={handleMenuIconClick} />
    ) : (
      <MenuIcon className="nav-menu__menu-icon" onClick={handleMenuIconClick} />
    );
  };

  return (
    <div className="nav-menu">
      <nav className="nav-menu__navigation">
        {getIcon()}
        {isLoggedIn ? (
          <ul className="nav-menu__list">
            <NavLink className="nav-menu__item" to={ROUTES.main} onClick={handleNavClick}>
              Home
            </NavLink>
            <NavLink
              className="nav-menu__item"
              to={ROUTES.savedNews}
              onClick={handleNavClick}
            >
              Saved articles
            </NavLink>
            <Button isSecondary onClick={onLogout}>
              <p className="nav-menu__logout-content">
                {user?.name}
                <LogoutIcon className="nav-menu__logout-icon" alt="logout icon" />
              </p>
            </Button>
          </ul>
        ) : (
          <ul className="nav-menu__list">
            <NavLink
              className="nav-menu__item nav-menu__item--active-white"
              to={ROUTES.main}
              onClick={handleNavClick}
            >
              Home
            </NavLink>
            <Button isSecondary onClick={handleSignInClick}>
              <p className="nav-menu__auth-content">Sign in</p>
            </Button>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavMenu;
