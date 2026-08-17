'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Bell, ShieldCheck } from 'lucide-react';

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-diablo-bg/90 border-b border-diablo-border px-8 py-5 flex justify-between items-center sticky top-0 z-30 backdrop-blur-md">
      <div>
        <h1 className="text-xl font-bold text-white font-display">{title}</h1>
        {subtitle && <p className="text-xs text-diablo-muted">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
          <ShieldCheck className="w-4 h-4" /> Live Backend Synchronized
        </div>

        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-diablo-surface border border-diablo-border text-xs font-semibold text-diablo-primary hover:bg-diablo-card transition-colors"
        >
          View Public Site <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </header>
  );
};
