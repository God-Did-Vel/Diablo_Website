'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { TopHeader } from '../../../components/layout/TopHeader';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { fetchBlogs } from '../../../services/api';
import { Blog } from '../../../types';
import { GlassCard } from '../../../components/ui/GlassCard';
import { Badge } from '../../../components/ui/Badge';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetchBlogs().then((blogs) => {
      const found = blogs.find((b) => b.slug === params.id || b.id === params.id) || blogs[0];
      setBlog(found);
    });
  }, [params.id]);

  if (!blog) return null;

  return (
    <main className="min-h-screen bg-diablo-bg flex flex-col">
      <TopHeader />
      <Navbar />

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-diablo-primary mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Hydration Articles
        </Link>

        <GlassCard className="p-8 md:p-12 border-diablo-primary/30 space-y-6">
          <div className="space-y-3">
            <Badge variant="cyan">{blog.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white font-display leading-tight">
              {blog.title}
            </h1>

            <div className="flex items-center gap-6 text-xs text-diablo-muted pt-2 border-b border-diablo-border pb-6">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-diablo-primary" /> {blog.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-diablo-primary" /> {blog.readTime}
              </span>
            </div>
          </div>

          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-80 object-cover rounded-2xl border border-diablo-border"
          />

          <div className="text-diablo-text text-base leading-relaxed space-y-4">
            <p className="font-semibold text-lg text-diablo-primary">{blog.summary}</p>
            <p>{blog.content}</p>
          </div>
        </GlassCard>
      </div>

      <Footer />
    </main>
  );
}
