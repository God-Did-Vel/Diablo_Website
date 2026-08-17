'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightTitle?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightTitle,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col mb-12 ${alignmentClass[align]} ${className}`}
    >
      {eyebrow && (
        <span className="text-[#0F75BC] font-semibold text-lg flex items-center gap-2 mb-3">
          <span className="w-10 h-0.5 bg-[#0F75BC]"></span>
          {eyebrow}
          {align === 'center' && <span className="w-10 h-0.5 bg-[#0F75BC]"></span>}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#1A2346] leading-tight">
        {title}{' '}
        {highlightTitle && (
          <span className="text-[#0F75BC]">
            {highlightTitle}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#444444] max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
