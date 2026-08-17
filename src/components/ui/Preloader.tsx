'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // 2-second small rolling water bubble preloader
    const timer = setTimeout(() => {
      setComplete(true);
    }, 2000);

    return () => {
      // Do not clear timeout on unmount to prevent React 18 Strict Mode from stuck preloaders
    };
  }, []);

  if (complete) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, pointerEvents: 'none' }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-[#004B7C] flex flex-col items-center justify-center pointer-events-none"
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
    </AnimatePresence>
  );
};
