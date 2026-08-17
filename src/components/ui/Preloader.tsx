'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExited, setIsExited] = useState(false);

  useEffect(() => {
    // 2-second small rolling water bubble preloader
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isExited) return null;

  // Custom cubic bezier easing for a smooth luxury slide
  const slideTransition = {
    duration: 0.9,
    ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
  };

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden ${
        isLoaded ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
    >
      {/* 3 Blue Background Slices / Panels */}
      <div className="absolute inset-0 flex w-full h-full">
        {/* Panel 1: Left Column */}
        <motion.div
          initial={{ y: '0%' }}
          animate={{ y: isLoaded ? '-100%' : '0%' }}
          transition={{ ...slideTransition, delay: 0.2 }}
          className="relative w-1/3 h-full bg-[#004B7C] border-r border-[#003860]/30 shadow-2xl"
        />

        {/* Panel 2: Center Column */}
        <motion.div
          initial={{ y: '0%' }}
          animate={{ y: isLoaded ? '-100%' : '0%' }}
          transition={{ ...slideTransition, delay: 0.35 }}
          className="relative w-1/3 h-full bg-[#004B7C] border-r border-[#003860]/30 shadow-2xl"
        />

        {/* Panel 3: Right Column */}
        <motion.div
          initial={{ y: '0%' }}
          animate={{ y: isLoaded ? '-100%' : '0%' }}
          transition={{ ...slideTransition, delay: 0.5 }}
          onAnimationComplete={() => {
            if (isLoaded) {
              setIsExited(true);
            }
          }}
          className="relative w-1/3 h-full bg-[#004B7C] shadow-2xl"
        />
      </div>

      {/* Middle Circle Spinner & Brand Label */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="center-spinner"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center"
          >
            {/* Small Rolling Water Bubble Animation */}
            <div className="relative flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00D2FF] via-[#0f75bc] to-white p-1 shadow-[0_0_30px_rgba(0,210,255,0.8)] animate-spin"
                style={{ animationDuration: '1.8s' }}
              >
                <div className="w-full h-full bg-[#005C97] rounded-full flex items-center justify-center p-2 relative overflow-hidden">
                  {/* Internal Rolling Water Droplet Bubble */}
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-white to-[#00D2FF] shadow-inner animate-bounce" />
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xs animate-pulse" />
                </div>
              </div>

              <span className="mt-4 text-xs font-black tracking-[0.25em] text-cyan-200 uppercase font-display animate-pulse">
                DIABLO TABLE WATER
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
