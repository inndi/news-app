import { SyntheticEvent, useState } from 'react';

import noImageIcon from '../../assets/images/no_image_available.jpeg';
import Spinner from '../Spinner/Spinner';

interface LazyImageProps {
  className?: string;
  src?: string;
  alt?: string;
  spinnerSize?: string;
}

const LazyImage = ({ className, src, alt, spinnerSize, ...rest }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => setLoaded(true);

  const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = noImageIcon;
  };

  return (
    <div className={`lazy-image ${className}`}>
      {!loaded && <Spinner size={spinnerSize} />}
      <img
        style={{ display: loaded ? 'block' : 'none' }}
        src={src ? src : noImageIcon}
        onError={(e) => onError(e)}
        onLoad={onLoad}
        alt={alt}
        {...rest}
      />
    </div>
  );
};

export default LazyImage;
