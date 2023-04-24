import { memo } from 'react';

import Copyrights from './components/Copyrights/Copyrights';
import FooterNav from './components/FooterNav/FooterNav';
import SocialMedia from './components/SocialMedia/SocialMedia';

import './Footer.scss';

const Footer = () => {
  console.log('Footer Render');
  return (
    <footer className="footer">
      <Copyrights />
      <nav className="footer__nav-container">
        <FooterNav />
        <SocialMedia />
      </nav>
    </footer>
  );
};

export default memo(Footer);
