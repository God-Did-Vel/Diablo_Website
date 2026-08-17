'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { TopHeader } from '../../components/layout/TopHeader';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { ProductsSection } from '../../components/products/ProductsSection';
import { FactCounter } from '../../components/stats/FactCounter';
import { TestimonialSection } from '../../components/testimonials/TestimonialSection';
import { FaqSection } from '../../components/faqs/FaqSection';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { fetchProducts, fetchTestimonials, fetchFaqs } from '../../services/api';
import { Product, Testimonial, Faq } from '../../types';
import {
  Droplets,
  ShieldCheck,
  Award,
  Recycle,
  Sparkles,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Package,
} from 'lucide-react';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
    fetchTestimonials().then(setTestimonials);
    fetchFaqs().then(setFaqs);
  }, []);

  const mineralBreakdown = [
    { label: 'pH Balance', val: '7.8', sub: 'Optimal Mild Alkaline' },
    { label: 'Total Dissolved Solids', val: '38 - 42 ppm', sub: 'Light Crisp Hydration' },
    { label: 'Calcium (Ca²⁺)', val: '12.4 mg/L', sub: 'Bone & Cellular Vitality' },
    { label: 'Magnesium (Mg²⁺)', val: '6.8 mg/L', sub: 'Electrolyte Balance' },
    { label: 'Potassium (K⁺)', val: '2.1 mg/L', sub: 'Muscle Function' },
    { label: 'Microplastics & BPA', val: '0.00%', sub: '100% Lab Certified Free' },
  ];

  const packagingStandards = [
    {
      icon: Sparkles,
      title: 'Cobalt Glass Reserve (750ml)',
      desc: 'Heavy luxury glass bottles designed for Michelin-star restaurants, executive dining, and closed-loop reuse.',
    },
    {
      icon: Recycle,
      title: '100% Recyclable rPET (500ml & 1.5L)',
      desc: 'Made from post-consumer recycled food-grade polymer, 100% BPA-free and generating zero virgin plastic waste.',
    },
    {
      icon: Package,
      title: 'Commercial Polycarbonate (19L)',
      desc: 'Heavy-duty ergonomic water containers built for office dispensers with hermetic tamper-evident seals.',
    },
  ];

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
            backgroundImage: "url('https://res.cloudinary.com/duweg8kpv/image/upload/v1786238784/D28_gfbufy.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F75BC]/30 border border-[#0F75BC]/50 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Droplets className="w-3.5 h-3.5" />
              Diablo Product Catalog
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-sm">
              Premium Purified & Alkaline Water Range
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl">
              Sourced from natural volcanic subterranean aquifers, ultra-filtered through 7 micro-stages for clean taste, balanced minerals, and cellular clarity.
            </p>
            <nav className="mt-8 flex items-center gap-2 text-sm text-gray-300">
              <Link href="/" className="hover:text-[#00D2FF] transition-colors font-medium">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="text-[#00D2FF] font-semibold">Products</span>
            </nav>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F75BC] via-[#00D2FF] to-[#0F75BC]" />
      </section>

      {/* Section 2: Product Showcase Catalog */}
      <div className="pt-6">
        {products.length > 0 && <ProductsSection products={products} />}
      </div>

      {/* Section 3: Certified Mineral Composition Breakdown */}
      <section className="py-24 bg-[#F9F9F9] border-y border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Certified Mineral Profile"
            title="OPTIMAL BIO-MINERAL BALANCE IN"
            highlightTitle="EVERY BOTTLE"
            subtitle="Laboratory tested down to parts-per-billion for crisp hydration, smooth palate neutrality, and cellular vitality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {mineralBreakdown.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-md shadow-sm border border-[#EEEEEE] flex items-center justify-between hover:border-[#0F75BC] transition-colors"
              >
                <div>
                  <h4 className="text-sm font-semibold text-[#888888] uppercase tracking-wider">{item.label}</h4>
                  <div className="text-3xl font-bold font-display text-[#1A2346] mt-1">{item.val}</div>
                  <p className="text-xs text-[#0F75BC] font-semibold mt-1">{item.sub}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#0F75BC]/10 text-[#0F75BC] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Sustainable Packaging Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Eco Architecture"
            title="SUSTAINABLE PACKAGING"
            highlightTitle="STANDARDS"
            subtitle="Designed for maximum purity preservation with minimum environmental footprint."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {packagingStandards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-8 bg-[#F9F9F9] rounded-md border border-[#EEEEEE] space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#0F75BC]/10 text-[#0F75BC] flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-[#1A2346]">{item.title}</h4>
                  <p className="text-sm text-[#555555] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Statistics Counter */}
      <FactCounter />

      {/* Section 6: Testimonials */}
      {testimonials.length > 0 && <TestimonialSection testimonials={testimonials} />}

      {/* Section 7: Product FAQs */}
      {faqs.length > 0 && <FaqSection faqs={faqs} />}

      {/* Section 8: Subscription Discount CTA */}
      <section className="py-16 bg-[#1A2346] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[#00D2FF] font-semibold text-xs uppercase tracking-widest block mb-2">
              Save on Recurring Deliveries
            </span>
            <h3 className="text-3xl font-bold font-display">
              Subscribe & Save Up to 20% on Monthly Hydration Plans
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              Choose your favorite bottle sizes and schedule automated home or office deliveries. Pause or cancel anytime.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <button className="px-8 py-4 bg-[#0F75BC] hover:bg-[#00D2FF] hover:text-[#1A2346] text-white font-semibold text-sm transition-all rounded-sm uppercase tracking-wider flex items-center gap-2">
              Get Custom Subscription <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
