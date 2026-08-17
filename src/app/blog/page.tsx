'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { TopHeader } from '../../components/layout/TopHeader';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { BlogSection } from '../../components/blog/BlogSection';
import { FactCounter } from '../../components/stats/FactCounter';
import { FaqSection } from '../../components/faqs/FaqSection';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { fetchBlogs, fetchFaqs } from '../../services/api';
import { Blog, Faq } from '../../types';
import {
  Droplets,
  BookOpen,
  Zap,
  Activity,
  HeartPulse,
  Brain,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Send,
  User,
  Clock,
} from 'lucide-react';

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
    fetchFaqs().then(setFaqs);
  }, []);

  const healthPillars = [
    {
      icon: Brain,
      title: 'Cognitive Clarity & Focus',
      desc: 'Proper hydration with balanced electrolytes prevents brain fog, sharpens reaction times, and maintains mental endurance.',
    },
    {
      icon: Zap,
      title: 'Cellular ATP Energy Boost',
      desc: 'Mildly alkaline water (pH 7.8) reduces metabolic acidity, optimizing mitochondrial energy production throughout the day.',
    },
    {
      icon: Activity,
      title: 'Athletic Recovery & Endurance',
      desc: 'Trace calcium and magnesium replenish vital lost minerals, preventing muscle cramps and accelerating recovery.',
    },
    {
      icon: HeartPulse,
      title: 'Digestive Balance & Detox',
      desc: 'Free of microplastics and heavy metals, pure table water gently flushes metabolic waste without stressing the kidneys.',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
  };

  const featuredBlog = blogs[0];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <TopHeader />
      <Navbar />

      {/* Section 1: Page Hero Banner */}
      <section className="relative text-white pt-40 pb-20 overflow-hidden bg-black">
        {/* Background Image with Crisp Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F75BC]/30 border border-[#0F75BC]/50 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
              Diablo Hydration Insights & Research
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-sm">
              News, Hydration Science & Wellness
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl">
              Explore scientific articles on optimal biological pH balance, zero-microplastic filtration technologies, and daily hydration strategies.
            </p>
            <nav className="mt-8 flex items-center gap-2 text-sm text-gray-300">
              <Link href="/" className="hover:text-[#00D2FF] transition-colors font-medium">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="text-[#00D2FF] font-semibold">Blog</span>
            </nav>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F75BC] via-[#00D2FF] to-[#0F75BC]" />
      </section>

      {/* Section 2: Featured Editorial Spotlight */}
      {featuredBlog && (
        <section className="py-20 bg-white border-b border-[#EEEEEE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F9F9F9] rounded-md border border-[#EEEEEE] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
              <div className="lg:col-span-6 relative h-80 lg:h-auto min-h-[340px]">
                <img
                  src={featuredBlog.imageUrl}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#0F75BC] text-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                  Featured Article
                </span>
              </div>
              <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-[#888888] uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#0F75BC]" /> {featuredBlog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0F75BC]" /> {featuredBlog.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#1A2346] hover:text-[#0F75BC] transition-colors leading-tight">
                    <Link href={`/blog/${featuredBlog.slug}`}>
                      {featuredBlog.title}
                    </Link>
                  </h2>
                  <p className="text-[#555555] text-[15px] leading-relaxed">
                    {featuredBlog.summary}
                  </p>
                </div>
                <div>
                  <Link
                    href={`/blog/${featuredBlog.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F75BC] hover:bg-[#1A2346] text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-sm"
                  >
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Latest Articles Grid */}
      <div className="pt-6">
        {blogs.length > 0 && <BlogSection blogs={blogs} />}
      </div>

      {/* Section 4: 4 Hydration Health Pillars */}
      <section className="py-24 bg-white border-t border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Biological Health"
            title="HOW PURE ALKALINE WATER"
            highlightTitle="TRANSFORMS YOUR BODY"
            subtitle="The science of cellular hydration: why water structure, pH 7.8 balance, and trace minerals create peak vitality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {healthPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F9F9F9] p-8 rounded-md border border-[#EEEEEE] hover:border-[#0F75BC] hover:bg-white transition-all space-y-4 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0F75BC]/10 text-[#0F75BC] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-[#1A2346]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Fact Counter */}
      <FactCounter />

      {/* Section 6: Hydration & Health FAQs */}
      {faqs.length > 0 && <FaqSection faqs={faqs} />}

      {/* Section 7: Newsletter & Hydration Guide CTA */}
      <section className="py-20 bg-[#1A2346] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#00D2FF] font-semibold text-xs uppercase tracking-widest block">
            Stay Hydrated & Informed
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold font-display">
            Subscribe to the Diablo Hydration Journal
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Get monthly water science reports, exclusive subscriber discounts, and wellness advice delivered directly to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3.5 bg-white text-[#1A2346] rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#0F75BC] hover:bg-[#00D2FF] hover:text-[#1A2346] text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5 shrink-0"
            >
              Subscribe <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {subscribed && (
            <p className="text-xs text-green-400 font-semibold">
              ✓ Thank you for subscribing to the Diablo Hydration Journal!
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
