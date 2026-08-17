'use client';

import React, { useEffect, useState } from 'react';
import { Newspaper, Plus, Trash2, Check, X } from 'lucide-react';
import { AdminSidebar } from '../../../../components/dashboard/AdminSidebar';
import { AdminHeader } from '../../../../components/dashboard/AdminHeader';
import { GlassCard } from '../../../../components/ui/GlassCard';
import { Button } from '../../../../components/ui/Button';
import { fetchBlogs } from '../../../../services/api';
import { Blog } from '../../../../types';

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  const handleDelete = (id: string) => {
    if (confirm('Delete this news article?')) {
      setBlogs(blogs.filter((b) => b.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-diablo-bg flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader title="Manage Articles & News" subtitle="Create and edit hydration insights and company news" />

        <main className="p-8 space-y-6 flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white font-display">Published Articles</h2>
            <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
              Create New Article
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((b) => (
              <GlassCard key={b.id} className="p-6 border-diablo-border space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-diablo-primary uppercase">{b.category}</span>
                  <button onClick={() => handleDelete(b.id)} className="text-red-400 hover:text-red-300">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-lg font-bold text-white font-display">{b.title}</h3>
                <p className="text-xs text-diablo-muted leading-relaxed line-clamp-2">{b.summary}</p>
                <div className="text-[11px] text-diablo-muted pt-2 border-t border-diablo-border flex justify-between">
                  <span>Author: {b.author}</span>
                  <span>{b.readTime}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
