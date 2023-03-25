import NothingFoundIcon from '../../../../components/iconsComponents/NothingFoundIcon';
import { BasicContent } from '../../../../interfaces/interfaces';

import './NotFoundSection.scss';

const NotFoundSection = ({ text, title }: BasicContent) => {
  return (
    <section className="not-found-section">
      <div className="not-found-section__img">
        <NothingFoundIcon />
      </div>
      <h2 className="not-found-section__title">{title}</h2>
      <p className="not-found-section__text">{text}</p>
    </section>
  );
};

export default NotFoundSection;
