import { SyntheticEvent, useCallback, useState } from 'react';

import noImageIcon from '../../assets/images/no-picture-available-icon-1.png';
import Spinner from '../Spinner/Spinner';

interface LazyImageProps {
  className?: string;
  src?: string;
  alt?: string;
  spinnerSize?: string;
}

const LazyImage = ({ className, src, alt, spinnerSize, ...rest }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const onLoad = useCallback(() => {
    // console.log('loaded');
    setLoaded(true);
  }, []);

  const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = noImageIcon;
  };

  // console.log('LazyImage Render');
  return (
    <>
      <div style={{ display: !loaded ? 'block' : 'none' }}>
        <Spinner size={spinnerSize} />
      </div>
      <img
        style={{ display: !loaded ? 'none' : 'block' }}
        className={className}
        src={src ? src : noImageIcon}
        onError={(e) => onError(e)}
        onLoad={onLoad}
        alt={alt}
        {...rest}
      />
    </>
  );
};

export default LazyImage;
