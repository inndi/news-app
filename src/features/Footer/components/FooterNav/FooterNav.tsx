import { Link } from 'react-router-dom';

import { ROUTES } from '../../../../config/constants';
import { scrollToTop } from '../../../../utils/generalUtils';

import './FooterNav.scss';

const FooterNav = () => {
  console.log('FooterNav Render');
  return (
    <ul className="footer-nav">
      <li className="footer-nav__item">
        <Link
          className="footer-nav__link"
          to={ROUTES.main}
          onClick={() => scrollToTop(true)}
        >
          Home
        </Link>
      </li>
    </ul>
  );
};

export default FooterNav;
