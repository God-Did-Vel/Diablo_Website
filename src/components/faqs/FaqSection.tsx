'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Faq } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';

interface FaqSectionProps {
  faqs: Faq[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Got Questions?"
          title="FREQUENTLY ASKED"
          highlightTitle="QUESTIONS"
          subtitle="Everything you need to know about our subterranean water origin, pH balance, and order delivery."
        />

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="bg-white border border-[#EEEEEE] rounded-sm overflow-hidden shadow-sm transition-all duration-300">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full p-6 text-left flex justify-between items-center gap-4 transition-colors ${isOpen ? 'bg-[#F4F5F8]' : 'hover:bg-[#F4F5F8]'}`}
                >
                  <span className="text-[17px] font-bold text-[#1A2346] font-display flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0F75BC] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0F75BC] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-0 text-[15px] text-[#444444] leading-relaxed border-t border-[#EEEEEE] bg-[#F4F5F8]"
                    >
                      <p className="mt-4">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
