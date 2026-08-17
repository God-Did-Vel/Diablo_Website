'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full cursor-pointer overflow-hidden focus:outline-none';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-3',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-diablo-primary to-diablo-secondary text-diablo-bg hover:shadow-glow font-bold border border-diablo-primary/40',
    secondary: 'bg-diablo-surface text-diablo-text hover:bg-diablo-card border border-diablo-border hover:border-diablo-primary/50',
    outline: 'bg-transparent text-diablo-primary border border-diablo-primary hover:bg-diablo-primary/10 hover:shadow-glow',
    glass: 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-diablo-primary/50',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="text-current">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};
