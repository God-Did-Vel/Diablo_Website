'use client';

import React, { useState } from 'react';

interface CloudinaryImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'thumb';
  quality?: number | 'auto';
  format?: 'auto' | 'webp' | 'png' | 'jpg';
  fallbackSrc?: string;
}

/**
 * Utility function to convert standard image URLs into Cloudinary transformations if using Cloudinary domain,
 * or format standard image placeholders reliably.
 */
export function buildCloudinaryUrl(
  src: string,
  options: { width?: number; height?: number; crop?: string; quality?: number | string; format?: string } = {}
): string {
  if (!src) return '';
  
  // If already a Cloudinary URL, append transformation parameters
  if (src.includes('res.cloudinary.com')) {
    const { width, height, crop = 'fill', quality = 'auto', format = 'auto' } = options;
    const transforms: string[] = [`f_${format}`, `q_${quality}`];
    if (width) transforms.push(`w_${width}`);
    if (height) transforms.push(`h_${height}`);
    if (crop) transforms.push(`c_${crop}`);

    const transformString = transforms.join(',');
    return src.replace('/upload/', `/upload/${transformString}/`);
  }

  // Return original src if standard URL
  return src;
}

export const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  src,
  alt,
  width,
  height,
  crop = 'fill',
  quality = 'auto',
  format = 'auto',
  fallbackSrc = 'https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=800&q=80',
  className = '',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(buildCloudinaryUrl(src, { width, height, crop, quality, format }));
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
      className={`transition-opacity duration-500 ${className}`}
      {...props}
    />
  );
};
