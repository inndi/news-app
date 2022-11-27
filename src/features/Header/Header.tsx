import Button from '../../components/Button/Button';
import Toggle from '../../components/Toggle/Toggle';
import { useAuth } from '../../contexts/authContext';
import Logo from './ components/Logo/Logo';

import './Header.scss';

const Header = () => {
  const { logout } = useAuth();

  const onCheckedChange = (isChecked: boolean) => {
    isChecked
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme');
  };

  console.log('Header Render');
  return (
    <header className="header">
      <Logo />
      <Toggle onCheckedChange={onCheckedChange} />
      <Button type="button" onClick={logout} modifier="primary">
        Logout
      </Button>
    </header>
  );
};

export default Header;
