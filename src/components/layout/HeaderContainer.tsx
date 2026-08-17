'use client';

import React, { useState, useEffect } from 'react';
import { TopHeader } from './TopHeader';
import { Navbar } from './Navbar';

export const HeaderContainer: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Top Contact & Social Header (hides on scroll or mobile) */}
      <div className={`pointer-events-auto transition-all duration-300 ${isScrolled ? '-translate-y-full absolute opacity-0' : 'translate-y-0 relative opacity-100'}`}>
        <TopHeader />
      </div>

      {/* Navigation Header */}
      <div className="pointer-events-auto">
        <Navbar isScrolled={isScrolled} />
      </div>
    </header>
  );
};
