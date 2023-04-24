import ErrorIcon from '../../../../components/iconsComponents/ErrorIcon';
import { BasicContent } from '../../../../interfaces/interfaces';

import './Error.scss';

const Error = ({ title }: BasicContent) => {
  return (
    <section className="error">
      <div className="error__img">
        <ErrorIcon />
      </div>
      <h2 className="error__title">{title}</h2>
    </section>
  );
};

export default Error;
