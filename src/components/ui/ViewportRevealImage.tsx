'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CloudinaryImage } from './CloudinaryImage';

interface ViewportRevealImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom';
  delay?: number;
  duration?: number;
}

export const ViewportRevealImage: React.FC<ViewportRevealImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  direction = 'up',
  delay = 0.1,
  duration = 0.9,
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'left':
        return {
          hidden: { opacity: 0, x: -60, scale: 0.95, filter: 'blur(10px)' },
          visible: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 60, scale: 0.95, filter: 'blur(10px)' },
          visible: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -50, scale: 0.95, filter: 'blur(10px)' },
          visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.8, filter: 'blur(12px)' },
          visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
        };
      case 'up':
      default:
        return {
          hidden: { opacity: 0, y: 50, scale: 0.95, filter: 'blur(10px)' },
          visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1], // Cinematic cubic-bezier
      }}
      className="relative overflow-hidden rounded-2xl"
    >
      <CloudinaryImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${className}`}
      />
    </motion.div>
  );
};
