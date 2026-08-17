'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-24 bg-[#F9F9F9] border-t border-[#EEEEEE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="TRUSTED BY FINE DINING &"
          highlightTitle="TOP ENTERPRISES"
          subtitle="Read how Diablo Table Water elevates hospitality dining, executive boardrooms, and athletic hydration."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-md border border-[#EEEEEE] shadow-sm flex flex-col justify-between relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Quote className="w-12 h-12 text-[#0F75BC]/10 absolute top-8 right-8 pointer-events-none group-hover:text-[#0F75BC]/20 transition-colors" />

              <div className="space-y-6">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500" />
                  ))}
                </div>

                <p className="text-[17px] text-[#444444] leading-relaxed italic z-10 relative">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-5 pt-8 mt-8 border-t border-[#EEEEEE]">
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
                    alt={t.clientName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#0F75BC]"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-[#0F75BC]/10 text-[#0F75BC] flex items-center justify-center font-bold text-xl">
                    {t.clientName.charAt(0)}
                  </div>
                )}

                <div>
                  <h4 className="text-[17px] font-bold text-[#1A2346]">{t.clientName}</h4>
                  <p className="text-[13px] text-[#0F75BC] font-semibold">{t.designation}</p>
                  {t.company && <p className="text-[12px] text-[#888888]">{t.company}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
