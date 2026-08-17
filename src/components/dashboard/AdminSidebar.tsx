'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Package, FileText, MessageSquare, Newspaper, Settings, LogOut, Droplet } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();
  const { logout, user } = useAuth();

  const menuItems = [
    { name: 'Overview', href: '/admin/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Manage Products', href: '/admin/dashboard/products', icon: <Package className="w-5 h-5" /> },
    { name: 'CMS Sections', href: '/admin/dashboard/cms', icon: <FileText className="w-5 h-5" /> },
    { name: 'Inquiries', href: '/admin/dashboard/inquiries', icon: <MessageSquare className="w-5 h-5" /> },
    { name: 'Articles & News', href: '/admin/dashboard/blogs', icon: <Newspaper className="w-5 h-5" /> },
    { name: 'Site Settings', href: '/admin/dashboard/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-diablo-surface border-r border-diablo-border min-h-screen p-6 flex flex-col justify-between">
      <div className="space-y-8">
        {/* Brand Header */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-diablo-secondary to-diablo-primary p-0.5 shadow-glow">
            <div className="w-full h-full bg-diablo-bg rounded-full flex items-center justify-center">
              <Droplet className="w-5 h-5 text-diablo-primary" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black font-display text-white">DIABLO</span>
            <span className="text-[9px] tracking-[0.2em] font-bold text-diablo-primary uppercase -mt-1">
              ADMIN CMS
            </span>
          </div>
        </Link>

        {/* Menu Navigation */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-diablo-primary/20 to-diablo-secondary/20 text-diablo-primary border border-diablo-primary/40 shadow-glow'
                    : 'text-diablo-muted hover:text-white hover:bg-diablo-card'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Info & Logout */}
      <div className="pt-6 border-t border-diablo-border space-y-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-diablo-primary/20 text-diablo-primary font-bold flex items-center justify-center text-sm border border-diablo-primary/40">
            {user?.name?.charAt(0) || 'A'}
          </div>
          <div className="overflow-hidden">
            <h4 className="text-xs font-bold text-white truncate">{user?.name || 'Master Admin'}</h4>
            <p className="text-[10px] text-diablo-muted truncate">{user?.email || 'admin@diablowater.com'}</p>
          </div>
        </div>

        <button
          onClick={logout}
          className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-red-400 hover:bg-red-500/10 border border-red-500/20 transition-colors"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </aside>
  );
};
