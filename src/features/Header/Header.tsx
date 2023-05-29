import { memo, MouseEvent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { ROUTES } from '../../config/constants';
import { scrollToTop } from '../../utils/generalUtils';
import Logo from './components/Logo/Logo';
import NavMenu from './components/NavMenu/NavMenu';

import './Header.scss';

const Header = () => {
  const [isDropdownMenu, setIsDropdownMenu] = useState<boolean>(false);

  const isMainPage = useLocation().pathname === ROUTES.main;

  const handleMenuIconClick = useCallback(() => {
    if (isDropdownMenu) {
      setIsDropdownMenu(false);
      document.body.style.overflow = 'auto';
    } else {
      setIsDropdownMenu(true);
      scrollToTop(true);
      document.body.style.overflow = 'hidden';
    }
  }, [isDropdownMenu]);

  const handleOverlay = (e: MouseEvent<HTMLDivElement>): void => {
    if (isDropdownMenu && e.target === e.currentTarget) {
      handleMenuIconClick();
    }
  };

  useEffect(() => {
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDropdownMenu(false);
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  console.log('Header Render');
  return (
    <header
      className={classNames('header', {
        'header__dropdown-menu': isDropdownMenu,
        'header__saved-article-page': !isMainPage,
        'header__main-page': isMainPage,
      })}
      onMouseDown={handleOverlay}
    >
      <div className="header__container">
        <Logo />
        <div className="header__nav-container">
          <NavMenu
            handleMenuIconClick={handleMenuIconClick}
            isDropdownOpen={isDropdownMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
