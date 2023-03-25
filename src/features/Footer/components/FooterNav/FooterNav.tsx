import { Link } from 'react-router-dom';

import { ROUTES } from '../../../../config/constants';

import './FooterNav.scss';

const FooterNav = () => {
  console.log('FooterNav Render');
  return (
    <ul className="footer-nav">
      <li>
        <Link className="footer-nav__link" to={ROUTES.main}>
          Home
        </Link>
      </li>
      <li>
        <a
          className="footer-nav__link"
          target="_blank"
          rel="noreferrer"
          href="https://practicum.com/"
        >
          Practicum by Yandex
        </a>
      </li>
    </ul>
  );
};

export default FooterNav;
