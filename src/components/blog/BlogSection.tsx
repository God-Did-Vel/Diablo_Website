'use client';

import React from 'react';
import Link from 'next/link';
import { User, ArrowRight, Clock } from 'lucide-react';
import { Blog } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

interface BlogSectionProps {
  blogs: Blog[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ blogs }) => {
  return (
    <section className="py-24 bg-[#F9F9F9] border-t border-[#EEEEEE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hydration Insights"
          title="LATEST NEWS &"
          highlightTitle="HEALTH ARTICLES"
          subtitle="Stay informed with expert insights on bodily alkalinity, zero-microplastic filtration, and wellness."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-md overflow-hidden shadow-sm border border-[#EEEEEE] group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="cyan">{blog.category}</Badge>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs text-[#888888] font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#0F75BC]" /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#0F75BC]" /> {blog.readTime}
                  </span>
                </div>

                <h3 className="text-[22px] font-bold text-[#1A2346] group-hover:text-[#0F75BC] transition-colors font-display leading-tight">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-[15px] text-[#444444] leading-relaxed line-clamp-2">
                  {blog.summary}
                </p>

                <div className="pt-6 mt-4 border-t border-[#EEEEEE] flex justify-between items-center">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-sm font-bold text-[#0F75BC] flex items-center gap-2 hover:text-[#1A2346] uppercase tracking-wider transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
