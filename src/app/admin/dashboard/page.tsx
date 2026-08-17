'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Package, FileText, MessageSquare, Newspaper, Droplet, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { AdminSidebar } from '../../../components/dashboard/AdminSidebar';
import { AdminHeader } from '../../../components/dashboard/AdminHeader';
import { GlassCard } from '../../../components/ui/GlassCard';
import { fetchProducts, fetchBlogs } from '../../../services/api';

export default function AdminDashboardPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [productCount, setProductCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);

  useEffect(() => {
    fetchProducts(true).then((p) => setProductCount(p.length));
    fetchBlogs().then((b) => setBlogCount(b.length));
  }, []);

  return (
    <div className="min-h-screen bg-diablo-bg flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader title="Dashboard Overview" subtitle="DIABLO TABLE WATER Enterprise Administration" />

        <main className="p-8 space-y-8 flex-1">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="p-6 border-diablo-border flex items-center justify-between">
              <div>
                <span className="text-xs text-diablo-muted uppercase font-semibold">Active Products</span>
                <h3 className="text-3xl font-black text-white font-display mt-1">{productCount}</h3>
                <span className="text-[11px] text-emerald-400 font-medium">In Stock Range</span>
              </div>
              <div className="p-3 rounded-2xl bg-diablo-primary/10 text-diablo-primary">
                <Package className="w-6 h-6" />
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-diablo-border flex items-center justify-between">
              <div>
                <span className="text-xs text-diablo-muted uppercase font-semibold">Published News</span>
                <h3 className="text-3xl font-black text-white font-display mt-1">{blogCount}</h3>
                <span className="text-[11px] text-diablo-primary font-medium">Articles Active</span>
              </div>
              <div className="p-3 rounded-2xl bg-diablo-secondary/20 text-diablo-primary">
                <Newspaper className="w-6 h-6" />
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-diablo-border flex items-center justify-between">
              <div>
                <span className="text-xs text-diablo-muted uppercase font-semibold">Purity Index</span>
                <h3 className="text-3xl font-black text-white font-display mt-1">99.99%</h3>
                <span className="text-[11px] text-emerald-400 font-medium">pH 7.8 Balanced</span>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <Droplet className="w-6 h-6" />
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-diablo-border flex items-center justify-between">
              <div>
                <span className="text-xs text-diablo-muted uppercase font-semibold">CMS Status</span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">Synced</h3>
                <span className="text-[11px] text-diablo-primary font-medium">PostgreSQL Live</span>
              </div>
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
            </GlassCard>
          </div>

          {/* Management Shortcuts */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-display">CMS Management Quick Actions</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/admin/dashboard/products">
                <GlassCard className="p-6 border-diablo-border hover:border-diablo-primary/50 group">
                  <div className="flex justify-between items-center mb-3">
                    <Package className="w-8 h-8 text-diablo-primary" />
                    <ArrowUpRight className="w-5 h-5 text-diablo-muted group-hover:text-diablo-primary transition-colors" />
                  </div>
                  <h4 className="text-base font-bold text-white">Product Catalog CMS</h4>
                  <p className="text-xs text-diablo-muted mt-1">Update prices, volume specs, bottle images, and stock availability.</p>
                </GlassCard>
              </Link>

              <Link href="/admin/dashboard/cms">
                <GlassCard className="p-6 border-diablo-border hover:border-diablo-primary/50 group">
                  <div className="flex justify-between items-center mb-3">
                    <FileText className="w-8 h-8 text-diablo-primary" />
                    <ArrowUpRight className="w-5 h-5 text-diablo-muted group-hover:text-diablo-primary transition-colors" />
                  </div>
                  <h4 className="text-base font-bold text-white">Website Content Sections</h4>
                  <p className="text-xs text-diablo-muted mt-1">Edit Hero text, About Us story, and 7-stage purification pipeline.</p>
                </GlassCard>
              </Link>

              <Link href="/admin/dashboard/inquiries">
                <GlassCard className="p-6 border-diablo-border hover:border-diablo-primary/50 group">
                  <div className="flex justify-between items-center mb-3">
                    <MessageSquare className="w-8 h-8 text-diablo-primary" />
                    <ArrowUpRight className="w-5 h-5 text-diablo-muted group-hover:text-diablo-primary transition-colors" />
                  </div>
                  <h4 className="text-base font-bold text-white">Customer & Corporate Inquiries</h4>
                  <p className="text-xs text-diablo-muted mt-1">View distributor requests, office dispenser setups, and status.</p>
                </GlassCard>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
