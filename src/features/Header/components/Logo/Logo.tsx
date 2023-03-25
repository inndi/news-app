import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import LogoIcon from '../../../../components/iconsComponents/LogoIcon';

import './Logo.scss';

interface LogoProps {
  isDropdownMenu?: boolean;
}
const Logo = ({ isDropdownMenu }: LogoProps) => {
  const isHomeActive = useLocation().pathname === '/';

  return (
    <h1 className="logo">
      <LogoIcon
        className="logo__icon"
        color={!isHomeActive && !isDropdownMenu ? '#1A1B22' : undefined}
      />
    </h1>
  );
};

export default memo(Logo);
