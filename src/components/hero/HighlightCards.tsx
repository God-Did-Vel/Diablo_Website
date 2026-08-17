'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Waves, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const HighlightCards: React.FC = () => {
  const highlights = [
    {
      icon: <Mountain className="w-8 h-8 text-diablo-primary" />,
      title: 'Volcanic Aquifer Source',
      desc: 'Extracted from 300m subterranean bedrock, rich in natural trace minerals.',
    },
    {
      icon: <Waves className="w-8 h-8 text-diablo-primary" />,
      title: '7-Stage RO & UV Filtered',
      desc: 'Strips heavy metals and microplastics down to 0.0001 microns.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-diablo-primary" />,
      title: 'pH 7.8 Alkaline Balance',
      desc: 'Optimized ionic balance for crisp taste and cellular hydration absorption.',
    },
  ];

  return (
    <section className="py-12 bg-diablo-bg relative z-20 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <GlassCard key={h.title} className="p-6 border-diablo-border hover:border-diablo-primary/50 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-diablo-primary/10 border border-diablo-primary/30 shrink-0">
              {h.icon}
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display mb-1">{h.title}</h3>
              <p className="text-xs text-diablo-muted leading-relaxed">{h.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
