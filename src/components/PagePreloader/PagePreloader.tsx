import Spinner from '../Spinner/Spinner';

import './PagePreloader.scss';

const PagePreloader = ({ spinnerSize = '150px' }: { spinnerSize?: string }) => {
  return (
    <div className="page-preloader">
      <div className="page-preloader__wrap">
        <Spinner size={spinnerSize} />
      </div>
    </div>
  );
};

export default PagePreloader;
