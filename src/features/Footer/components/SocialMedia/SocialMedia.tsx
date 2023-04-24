import { ReactComponent as GithubIcon } from '../../../../assets/images/icon-github.svg';
import { ReactComponent as LinkedinIcon } from '../../../../assets/images/linkedin.svg';

import './SocialMedia.scss';

const SocialMedia = () => {
  console.log('SocialMedia Render');
  return (
    <ul className="social-media">
      <li className="social-media__item">
        <a target="_blank" rel="noreferrer" href="https://github.com/inndi">
          <GithubIcon height="100%" width="100%" title="github icon" />
        </a>
      </li>

      <li className="social-media__item">
        {' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/inna-spivakova-7a5a41228/"
        >
          <LinkedinIcon height="100%" width="100%" title="linkedIn icon" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
