import { memo } from 'react';

import authorAvatar from '../../assets/images/avatar.jpg';
import LazyImage from '../LazyImage/LazyImage';

import './AboutAuthor.scss';

const AboutAuthor = () => {
  return (
    <section className="about-author">
      <div className="about-author__container">
        <LazyImage
          className="about-author__avatar"
          src={authorAvatar}
          alt="author photo"
          spinnerSize="35px"
        />
        <div className="about-author__info">
          <h2 className="about-author__title">About the author</h2>
          <p className="about-author__content">
            Hi there! I am Inna, a self-motivated Junior Fullstack Developer (Frontend
            oriented). Fast learner who thrives in fast-paced, dynamic, and demanding
            environments.
          </p>
          <p className="about-author__content">
            My main stack is React, Redux, TypeScript and Node.js.
          </p>
          <p className="about-author__content">
            I'm able to help businesses grow and increase their audience reach through the
            convenience of using their product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutAuthor);
