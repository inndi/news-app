import { useLocation } from 'react-router-dom';

import CloseIcon from '../../../../components/iconsComponents/CloseIcon';
import MenuIcon from '../../../../components/iconsComponents/MenuIcon';

import './NavMenu.scss';

interface NavMenuProps {
  children?: JSX.Element;
  handleMenuClick?: () => void;
  isDropdownMenu?: boolean;
}

const NavMenu = (props: NavMenuProps) => {
  const { children, handleMenuClick, isDropdownMenu } = props;
  const isHomeActive = useLocation().pathname === '/';

  const getIcon = () => {
    return isDropdownMenu ? (
      <CloseIcon className="nav-menu__close-icon" />
    ) : (
      <MenuIcon
        className="nav-menu__menu-icon"
        color={!isHomeActive ? '#1A1B22' : undefined}
      />
    );
  };

  return (
    <div className="nav-menu">
      <nav className="nav-menu__navigation" onClick={handleMenuClick}>
        {getIcon()}
        {children}
      </nav>
    </div>
  );
};

export default NavMenu;
