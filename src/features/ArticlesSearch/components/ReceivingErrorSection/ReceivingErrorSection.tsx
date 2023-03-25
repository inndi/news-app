import ErrorIcon from '../../../../components/iconsComponents/ErrorIcon';
import { BasicContent } from '../../../../interfaces/interfaces';

import './ReceivingErrorSection.scss';

const ReceivingErrorSection = ({ title }: BasicContent) => {
  return (
    <section className="res-err-section">
      <div className="res-err-section__img">
        <ErrorIcon />
      </div>
      <h2 className="res-err-section__title">{title}</h2>
    </section>
  );
};

export default ReceivingErrorSection;
