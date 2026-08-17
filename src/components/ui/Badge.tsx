import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'purple' | 'success';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className = '',
}) => {
  const variantStyles = {
    cyan: 'bg-diablo-primary/10 text-diablo-primary border-diablo-primary/30',
    blue: 'bg-diablo-secondary/15 text-blue-400 border-diablo-secondary/40',
    purple: 'bg-diablo-accent/15 text-purple-300 border-diablo-accent/40',
    success: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border backdrop-blur-sm ${variantStyles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
};
