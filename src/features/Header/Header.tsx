import { memo, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import Button from '../../components/Button/Button';
import LogoutIcon from '../../components/iconsComponents/LogoutIcon';
import { ROUTES } from '../../config/constants';
import { useAuth } from '../../contexts/authContext';
import { useAppDispatch } from '../../redux/hooks';
import { MODAL_IDS, openModal } from '../../redux/slices/modalsSlice';
import {
  fetchSavedArticles,
  removeAllArticles,
} from '../../redux/slices/savedArticlesSlice';
import Logo from './components/Logo/Logo';
import NavMenu from './components/NavMenu/NavMenu';

import './Header.scss';
//TODO: remove all comments EVERYWHERE
// check all html css classes
// use Professional PHOTo in about author
//

const Header = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const [isDropdownMenu, setIsDropdownMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  // REVIEW: + rename;
  // I use it in 3 places;
  const isHomeActive = useLocation().pathname === '/';

  const dispatch = useAppDispatch();

  const handleMenuClick = useCallback(() => {
    !isDropdownMenu ? setIsDropdownMenu(true) : setIsDropdownMenu(false);
  }, [isDropdownMenu]);

  const handleSignInClick = useCallback(() => {
    dispatch(
      openModal(MODAL_IDS.login, {
        title: 'Sign in',
        redirectText: 'Sign up',
      }),
    );
  }, []);

  const onLogout = () => {
    logout();
    dispatch(removeAllArticles()); // TODO:  + remove the marks after logout;
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchSavedArticles());
    }
  }, [isLoggedIn]);

  const getNavMenu = () => {
    return isLoggedIn ? (
      <ul className="header__navigation-list">
        <li
          className={classNames('header__nav-item', {
            'header__nav-item--active-white': isHomeActive,
            'header__nav-item--black': !isHomeActive,
          })}
          onClick={() => navigate(ROUTES.main)}
        >
          Home
        </li>
        <li
          className={classNames('header__nav-item', {
            'header__nav-item--black header__nav-item--active-black': !isHomeActive,
          })}
          onClick={() => navigate(ROUTES.savedNews)}
        >
          Saved articles
        </li>
        <Button isSecondary={true} isBlack={!isHomeActive && true} onClick={onLogout}>
          <p className="header__logout-content">
            {user?.name}
            <LogoutIcon
              className="header__logout-icon"
              alt="logout icon"
              color={!isHomeActive && !isDropdownMenu ? '#1A1B22' : undefined}
            />
          </p>
        </Button>
      </ul>
    ) : (
      <ul className="header__navigation-list">
        <li className="header__nav-item header__nav-item--active-white">Home</li>
        <Button isSecondary isBlack={!isHomeActive && true} onClick={handleSignInClick}>
          <p className="header__auth-content">Sign in</p>
        </Button>
      </ul>
    );
  };

  // REVIEW: check "isHomeActive" prob we don't need to pass it through all the components (final check)

  console.log('Header Render', isHomeActive);
  return (
    <header
      className={classNames('header', {
        'header__dropdown-menu': isDropdownMenu,
      })}
    >
      <div className="header__container">
        <Logo isDropdownMenu={isDropdownMenu} />
        <div className="header__nav-container">
          <NavMenu handleMenuClick={handleMenuClick} isDropdownMenu={isDropdownMenu}>
            {getNavMenu()}
          </NavMenu>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
