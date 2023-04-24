import NotFoundIcon from '../../../../components/iconsComponents/NothingFoundIcon';
import { BasicContent } from '../../../../interfaces/interfaces';

import './NotFound.scss';

const NotFound = ({ text, title }: BasicContent) => {
  return (
    <section className="not-found">
      <div className="not-found__img">
        <NotFoundIcon />
      </div>
      <h2 className="not-found__title">{title}</h2>
      <p className="not-found__text">{text}</p>
    </section>
  );
};

export default NotFound;
