'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { TopHeader } from '../../components/layout/TopHeader';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { ContactSection } from '../../components/contact/ContactSection';
import { FactCounter } from '../../components/stats/FactCounter';
import { FaqSection } from '../../components/faqs/FaqSection';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { fetchFaqs } from '../../services/api';
import { Faq } from '../../types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Truck,
  Droplets,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export default function ContactPage() {
  const [faqs, setFaqs] = useState<Faq[]>([]);

  useEffect(() => {
    fetchFaqs().then(setFaqs);
  }, []);

  const regionalHubs = [
    {
      title: 'Global HQ & Aquifer Spring Facility',
      address: '123 Aguapure Street, Spring Valley, NY 10001, USA',
      phone: '1-800-500-333-33',
      hours: 'Mon - Fri: 8:00 AM - 7:00 PM',
      type: 'Headquarters & Bottling',
    },
    {
      title: 'Northeast Logistics Hub',
      address: '450 Industrial Parkway, Newark, NJ 07102',
      phone: '+1 (555) 234-8890',
      hours: 'Mon - Sat: 7:00 AM - 6:00 PM',
      type: 'Fleet Distribution Center',
    },
    {
      title: 'Midwest Regional Operations',
      address: '780 Lakefront Commercial Blvd, Chicago, IL 60601',
      phone: '+1 (555) 345-9921',
      hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
      type: 'Corporate Supply Hub',
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
            backgroundImage: "url('https://res.cloudinary.com/duweg8kpv/image/upload/v1786238784/D27_yhsv7u.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F75BC]/30 border border-[#0F75BC]/50 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Droplets className="w-3.5 h-3.5" />
              Contact & Support Desk
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-sm">
              Get in Touch with Our Hydration Team
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl">
              Have questions regarding our volcanic aquifer sourcing, recurring home deliveries, or corporate dispenser servicing? We are here to help.
            </p>
            <nav className="mt-8 flex items-center gap-2 text-sm text-gray-300">
              <Link href="/" className="hover:text-[#00D2FF] transition-colors font-medium">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="text-[#00D2FF] font-semibold">Contact Us</span>
            </nav>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F75BC] via-[#00D2FF] to-[#0F75BC]" />
      </section>

      {/* Section 2: Contact Section & Form */}
      <div className="pt-6">
        <ContactSection />
      </div>

      {/* Section 3: Regional Hubs & Distribution Facilities */}
      <section className="py-24 bg-[#F9F9F9] border-y border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Locations"
            title="REGIONAL HUBS &"
            highlightTitle="LOGISTICS CENTERS"
            subtitle="Strategically located logistics hubs and cold-storage facilities ensuring rapid delivery coverage."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {regionalHubs.map((hub, idx) => (
              <div key={idx} className="bg-white p-8 rounded-md shadow-sm border border-[#EEEEEE] space-y-4">
                <span className="px-3 py-1 bg-blue-50 text-[#0F75BC] text-xs font-bold uppercase tracking-wider rounded-full inline-block">
                  {hub.type}
                </span>
                <h4 className="text-xl font-bold font-display text-[#1A2346]">{hub.title}</h4>
                <div className="space-y-2 text-sm text-[#555555]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#0F75BC] shrink-0 mt-1" />
                    <span>{hub.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#0F75BC] shrink-0" />
                    <span>{hub.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0F75BC] shrink-0" />
                    <span>{hub.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Fact Counter */}
      <FactCounter />

      {/* Section 5: FAQs on Delivery & Invoicing */}
      {faqs.length > 0 && <FaqSection faqs={faqs} />}

      {/* Section 6: Corporate Hydration Consultation CTA */}
      <section className="py-16 bg-[#1A2346] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[#00D2FF] font-semibold text-xs uppercase tracking-widest block mb-2">
              Corporate Hydration Plans
            </span>
            <h3 className="text-3xl font-bold font-display">
              Need a Custom Water Solution for Your Organization?
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              Speak directly with our enterprise account managers for customized dispenser setups and bulk discounts.
            </p>
          </div>
          <a href="tel:180050033333" className="shrink-0">
            <button className="px-8 py-4 bg-[#0F75BC] hover:bg-[#00D2FF] hover:text-[#1A2346] text-white font-semibold text-sm transition-all rounded-sm uppercase tracking-wider flex items-center gap-2">
              Call 1-800-500-333-33 <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
