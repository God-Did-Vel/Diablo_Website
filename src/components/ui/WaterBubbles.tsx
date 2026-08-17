'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const WaterBubbles: React.FC = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 8,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 12 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0, b.opacity, 0] }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: 'linear',
          }}
          className="absolute rounded-full border border-diablo-primary/40 bg-diablo-primary/10 backdrop-blur-[1px]"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
          }}
        />
      ))}
    </div>
  );
};
