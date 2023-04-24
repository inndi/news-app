import { memo } from 'react';

import LogoIcon from '../../../../components/iconsComponents/LogoIcon';

import './Logo.scss';

const Logo = () => {
  console.log('logo');
  return (
    <h1 className="logo">
      <LogoIcon className="logo__icon" />
    </h1>
  );
};

export default memo(Logo);
