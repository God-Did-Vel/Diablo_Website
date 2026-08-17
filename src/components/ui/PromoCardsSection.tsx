'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Plus } from 'lucide-react';
import Link from 'next/link';

export const PromoCardsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 - background image */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0 }}
            className="relative rounded-2xl overflow-hidden bg-cover bg-center min-h-[550px] p-10 flex flex-col justify-center text-left shadow-lg border border-gray-100 group"
            style={{ backgroundImage: "url('https://res.cloudinary.com/duweg8kpv/image/upload/v1786245157/D39_sl74up.jpg')" }}
          >
            <div className="absolute inset-0 bg-white/35 group-hover:bg-white/25 transition-colors duration-500"></div>
            <div className="relative z-10">
              <h4 className="text-[#00AEEF] font-bold tracking-wider text-[13px] mb-3 uppercase">Water & You</h4>
              <h2 className="text-4xl font-extrabold text-[#1A2346] leading-[1.1] mb-5 font-display">
                Essential<br/>for Healthy Life
              </h2>
              <div className="mb-6">
                <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5C2.5 5 2.5 0 5 0C7.5 0 7.5 5 10 5C12.5 5 12.5 10 15 10C17.5 10 17.5 5 20 5C22.5 5 22.5 0 25 0C27.5 0 27.5 5 30 5C32.5 5 32.5 10 35 10C37.5 10 37.5 5 40 5" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-600 text-sm mb-8 pr-4">
                Righteous indignation & dislike men who are beguiled the charms.
              </p>

              <ul className="space-y-3.5 mb-10">
                <li className="flex items-center text-sm font-semibold text-gray-800">
                  <Droplet className="w-4 h-4 text-[#00AEEF] mr-3 fill-current" />
                  Carrying nutrients & oxygen
                </li>
                <li className="flex items-center text-sm font-semibold text-gray-800">
                  <Droplet className="w-4 h-4 text-[#00AEEF] mr-3 fill-current" />
                  Aiding digestion
                </li>
                <li className="flex items-center text-sm font-semibold text-gray-800">
                  <Droplet className="w-4 h-4 text-[#00AEEF] mr-3 fill-current" />
                  Normalizing blood pressure
                </li>
                <li className="flex items-center text-sm font-semibold text-gray-800">
                  <Droplet className="w-4 h-4 text-[#00AEEF] mr-3 fill-current" />
                  Stabilizing the heartbeat
                </li>
              </ul>

              <Link href="/products" className="inline-block bg-[#4EC7F3] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1A2346] hover:text-white transition-colors shadow-md">
                VIEW ALL
              </Link>
            </div>
          </motion.div>

          {/* Card 2 - background image */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden bg-cover bg-center min-h-[550px] p-10 flex flex-col items-center text-center shadow-lg pt-14 border border-gray-100 group"
            style={{ backgroundImage: "url('https://res.cloudinary.com/duweg8kpv/image/upload/v1786244223/D36_plbkwn.png')" }}
          >
            <div className="absolute inset-0 bg-[#F3F6F8]/40 group-hover:bg-[#F3F6F8]/30 transition-colors duration-500"></div>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-[28px] font-bold text-[#1A2346] leading-tight mb-5 font-display">
                Healthy Water for<br/>Your Staff
              </h2>
              <p className="text-gray-500 text-sm mb-8 px-4 leading-relaxed">
                Water makes up over 70% of our bodies and is essential for our good health.
              </p>

              <button className="w-12 h-12 rounded-full bg-white text-[#00AEEF] flex items-center justify-center shadow-md hover:bg-[#00AEEF] hover:text-white transition-all transform hover:scale-110">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Blue swirl mock overlay */}
            <svg className="absolute bottom-10 left-0 w-full h-32 text-[#00AEEF]/60 pointer-events-none z-10" viewBox="0 0 200 100" preserveAspectRatio="none">
              <path d="M0,50 Q50,0 100,50 T200,50" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6"/>
              <path d="M0,70 Q50,20 100,70 T200,70" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            </svg>
          </motion.div>

          {/* Card 3 - background image */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden bg-cover bg-center min-h-[550px] p-10 flex flex-col items-center text-center shadow-lg justify-between border border-[#EBF4F7] pt-12"
            style={{ backgroundImage: "url('https://res.cloudinary.com/duweg8kpv/image/upload/v1786245154/D37_qj1zpj.jpg')" }}
          >
            <div className="absolute inset-0 bg-[#EBF4F7]/40"></div>

            <div className="relative z-10 flex-1 w-full flex flex-col items-center justify-start mb-8">
              <h2 className="text-[26px] font-bold text-[#1A2346] leading-tight mb-4 font-display">
                Offers<br/>Rent, Buy or Hire
              </h2>
              <p className="text-gray-500 text-sm mb-6 px-4 leading-relaxed">
                All prices are Tax inclusive & a minimum order of 2 water bottles per month.
              </p>

              <button className="w-12 h-12 rounded-full bg-white text-[#00AEEF] flex items-center justify-center shadow-md hover:bg-[#00AEEF] hover:text-white transition-all transform hover:scale-110">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <button className="absolute bottom-6 right-6 z-10 w-10 h-10 rounded-full border border-[#00AEEF] text-[#00AEEF] flex items-center justify-center hover:bg-[#00AEEF] hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13V1M7 1L1 7M7 1L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};