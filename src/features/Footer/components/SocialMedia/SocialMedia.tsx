import githubIcon from '../../../../assets/images/icon-github.svg';
import fbIcon from '../../../../assets/images/social-fb.svg';

import './SocialMedia.scss';

const SocialMedia = () => {
  console.log('SocialMedia Render');
  return (
    <ul className="social-media">
      <li className="social-media__link">
        <a target="_blank" rel="noreferrer" href="https://github.com/inndi">
          <img className="social-media__link-img" src={githubIcon} alt="github icon" />
        </a>
      </li>
      <li className="social-media__link">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100028541162326"
        >
          <img className="social-media__link-img" src={fbIcon} alt="facebook icon" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
