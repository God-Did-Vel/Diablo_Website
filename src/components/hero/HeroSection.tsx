'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Droplet, ShieldCheck, Sparkles, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { HeroSectionData } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface HeroSectionProps {
  data: HeroSectionData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section className="relative min-h-[0vh] flex items-center justify-center pt-8 pb-20 overflow-hidden bg-hero-gradient">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          <Badge variant="cyan" className="shadow-glow">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            {data.badgeText || 'ISO 22000 & FDA Certified Pure'}
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-[1.08]">
            {data.title || 'CRYSTAL PURITY IN EVERY DROP'}{' '}
            <span className="block gradient-text mt-1">{data.highlight || 'DIABLO TABLE WATER'}</span>
          </h1>

          <p className="text-base sm:text-lg text-diablo-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
            {data.subtitle ||
              'Sourced from natural volcanic subterranean aquifers, ultra-filtered through 7 micro-refinement stages for unmatched taste, hydration, and cellular clarity.'}
          </p>

          {/* Key Feature Quick Tags */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-diablo-text pt-2">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-diablo-surface/80 border border-diablo-border">
              <CheckCircle className="w-4 h-4 text-diablo-primary" /> pH 7.8 Balance
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-diablo-surface/80 border border-diablo-border">
              <CheckCircle className="w-4 h-4 text-diablo-primary" /> Zero Microplastics
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-diablo-surface/80 border border-diablo-border">
              <CheckCircle className="w-4 h-4 text-diablo-primary" /> 7-Stage RO Filtered
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link href="/products">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                {data.ctaPrimary || 'Explore Water Range'}
              </Button>
            </Link>

            <Link href="/process">
              <Button variant="glass" size="lg" icon={<Play className="w-4 h-4 text-diablo-primary fill-diablo-primary" />}>
                {data.ctaSecondary || 'Watch Filtration Pipeline'}
              </Button>
            </Link>
          </div>

          {/* Stat Pill Badge */}
          <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 border-t border-diablo-border/50">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-black text-diablo-primary font-display">{data.purityStat || '99.99%'}</div>
              <div className="text-xs text-diablo-muted leading-tight max-w-[140px]">
                {data.statsLabel || 'Microbial & Heavy Metal Purity Rating'}
              </div>
            </div>
            <div className="h-8 w-px bg-diablo-border mx-2" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <span className="text-xs font-semibold text-white">100% Quality Guaranteed</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Animated Glassmorphic Bottle Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Animated Water Ripple Rings */}
          <div className="absolute w-80 h-80 rounded-full border border-diablo-primary/30 animate-ripple pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full border border-diablo-secondary/20 animate-ripple delay-1000 pointer-events-none" />

          {/* Main Hero Card Container */}
          <div className="glass-card  mt-8 p-6 md:p-8 rounded-3xl relative z-10 max-w-md w-full border border-diablo-primary/30 shadow-glow-lg text-center">
            {/* Floating Top Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-diablo-surface border border-diablo-primary text-diablo-primary font-bold text-xs shadow-glow uppercase tracking-wider flex items-center gap-1.5">
              <Droplet className="w-3.5 h-3.5 fill-diablo-primary" /> Premium Glass Edition
            </div>

            {/* Bottle Image Showcase */}
            <div className="relative my-4 flex items-center justify-center">
              <motion.img
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                src={data.imageUrl || 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80'}
                alt="Diablo Table Water Bottle"
                className="h-80 md:h-96 object-contain filter drop-shadow-[0_20px_30px_rgba(0,240,255,0.35)]"
              />
            </div>

            {/* Card Footer Info */}
            <div className="bg-diablo-surface/90 rounded-2xl p-4 border border-diablo-border flex justify-between items-center text-left">
              <div>
                <h4 className="text-sm font-bold text-white">Diablo Reserve Glass</h4>
                <p className="text-xs text-diablo-primary font-semibold">750 ml Cobalt Luxury Edition</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-black text-white font-display">$4.50</span>
                <span className="block text-[10px] text-emerald-400 font-semibold">In Stock</span>
              </div>
            </div>
          </div>
        </motion.div>
      {/* </div> */}
    </section>
  );
};
