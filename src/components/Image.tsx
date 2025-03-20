import React from 'react';
import { getImageUrl } from '../utils/assetHelpers';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  fallback = 'https://via.placeholder.com/400x300?text=Image+not+available',
  ...props
}) => {
  const [error, setError] = React.useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
    }
  };

  return (
    <img
      src={error ? fallback : getImageUrl(src)}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default Image;