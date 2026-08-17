'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`glass-card p-6 rounded-2xl relative overflow-hidden ${
        hoverEffect ? 'hover:-translate-y-1 hover:border-diablo-primary/40' : ''
      } ${className}`}
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-diablo-primary/5 rounded-full blur-3xl pointer-events-none" />
      {children}
    </motion.div>
  );
};
