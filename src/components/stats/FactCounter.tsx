'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { Award, Droplet, Factory, ShieldCheck } from 'lucide-react';

export const FactCounter: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const [countYears, setCountYears] = useState(0);
  const [countPurity, setCountPurity] = useState(0);
  const [countVolume, setCountVolume] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Years Counter
      let y = 0;
      const t1 = setInterval(() => {
        y += 1;
        if (y >= 18) {
          setCountYears(18);
          clearInterval(t1);
        } else setCountYears(y);
      }, 50);

      // Purity Counter
      let p = 0;
      const t2 = setInterval(() => {
        p += 5;
        if (p >= 99.99) {
          setCountPurity(99.99);
          clearInterval(t2);
        } else setCountPurity(p);
      }, 30);

      // Volume Counter
      let v = 0;
      const t3 = setInterval(() => {
        v += 25000;
        if (v >= 750000) {
          setCountVolume(750000);
          clearInterval(t3);
        } else setCountVolume(v);
      }, 40);

      return () => {
        clearInterval(t1);
        clearInterval(t2);
        clearInterval(t3);
      };
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 bg-[#0F75BC] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
            <Award className="w-10 h-10 text-white" />
          </div>
          <div className="text-5xl font-bold text-white font-display mb-2">{countYears}+</div>
          <h4 className="text-[17px] font-semibold text-white uppercase tracking-wider mb-1">Years Experience</h4>
          <p className="text-sm text-sky-200">Purity & Bottling Excellence</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
            <Droplet className="w-10 h-10 text-white" />
          </div>
          <div className="text-5xl font-bold text-white font-display mb-2">{countPurity.toFixed(2)}%</div>
          <h4 className="text-[17px] font-semibold text-white uppercase tracking-wider mb-1">Microbial Purity Score</h4>
          <p className="text-sm text-sky-200">Laboratory Certified Rating</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
            <Factory className="w-10 h-10 text-white" />
          </div>
          <div className="text-5xl font-bold text-white font-display mb-2">
            {(countVolume / 1000).toFixed(0)}k+
          </div>
          <h4 className="text-[17px] font-semibold text-white uppercase tracking-wider mb-1">Litres Bottled Daily</h4>
          <p className="text-sm text-sky-200">Automated Precision Facility</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <div className="text-5xl font-bold text-white font-display mb-2">100%</div>
          <h4 className="text-[17px] font-semibold text-white uppercase tracking-wider mb-1">Sustainable & BPA-Free</h4>
          <p className="text-sm text-sky-200">Glass & Recycled PET Polymers</p>
        </div>

      </div>
    </section>
  );
};
