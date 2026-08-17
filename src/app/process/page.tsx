'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { TopHeader } from '../../components/layout/TopHeader';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { ProcessSection } from '../../components/process/ProcessSection';
import { FactCounter } from '../../components/stats/FactCounter';
import { FaqSection } from '../../components/faqs/FaqSection';
import { TestimonialSection } from '../../components/testimonials/TestimonialSection';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { fetchProcessSteps, fetchFaqs, fetchTestimonials } from '../../services/api';
import { ProcessStep, Faq, Testimonial } from '../../types';
import {
  Truck,
  Building2,
  Utensils,
  FlaskConical,
  Wrench,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  ArrowRight,
  ChevronRight,
  Layers,
  Sun,
  Award,
} from 'lucide-react';

export default function ProcessPage() {
  const [steps, setSteps] = useState<ProcessStep[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetchProcessSteps().then(setSteps);
    fetchFaqs().then(setFaqs);
    fetchTestimonials().then(setTestimonials);
  }, []);

  const serviceOfferings = [
    {
      icon: Truck,
      title: 'Residential Pure Water Delivery',
      desc: 'Scheduled doorstep delivery of 1.5L and 500ml eco-bottles for families and wellness-conscious homes with flexible calendar control.',
      tag: 'Doorstep Delivery',
    },
    {
      icon: Building2,
      title: 'Commercial & Office Hydration',
      desc: 'Heavy-duty 19L pure water jars paired with touchless smart hot/cold dispensers, automated restocks, and consolidated invoicing.',
      tag: 'Enterprise Supply',
    },
    {
      icon: Utensils,
      title: 'Luxury Hotel & Fine Dining Reserve',
      desc: 'Cobalt Glass 750ml bottles with optional custom crest labeling and closed-loop sanitization pickup for five-star dining.',
      tag: 'Fine Dining',
    },
    {
      icon: FlaskConical,
      title: 'Water Quality & Mineral Lab Testing',
      desc: 'Continuous inline spectrometry and 24/7 incubator culture testing to verify zero microplastics, lead, or bacteria.',
      tag: 'Certified Testing',
    },
    {
      icon: Wrench,
      title: 'Dispenser Maintenance & UV Sanitization',
      desc: 'Complimentary 90-day maintenance, descaling, and internal UV-C chamber cleaning conducted by certified Diablo technicians.',
      tag: 'Free Maintenance',
    },
    {
      icon: Sparkles,
      title: 'Conference & Event Bulk Pallet Supply',
      desc: 'Fast chilled pallet drop-off for summits, sports events, and corporate retreats with on-site recycling collection bins.',
      tag: 'Event Logistics',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Subterranean Volcanic Aquifer',
      desc: 'Extracted from protected bedrock aquifers 300 meters deep, naturally shielded from surface contaminants.',
    },
    {
      title: '0.0001 Micron Reverse Osmosis',
      desc: 'Dual-pass filtration membranes strip out all microplastics, nitrates, and dissolved chemicals.',
    },
    {
      title: 'Balanced pH 7.8 Alkaline Profile',
      desc: 'Infused with trace calcium, magnesium, and potassium for instant cellular absorption and crisp taste.',
    },
    {
      title: 'Zero Virgin Plastic Commitment',
      desc: '100% recyclable BPA-free rPET bottles, circular cobalt glass, and zero aquifer depletion practices.',
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
            backgroundImage: "url('https://res.cloudinary.com/duweg8kpv/image/upload/v1786710101/D46_bhs7tg.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F75BC]/30 border border-[#0F75BC]/50 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Droplets className="w-3.5 h-3.5" />
              Diablo Water Services & Purification
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-sm">
              Pure Water Services & Purification Pipeline
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl">
              From subterranean volcanic extraction to robotic clean-room bottling and enterprise fleet distribution, explore our complete suite of hydration services.
            </p>
            <nav className="mt-8 flex items-center gap-2 text-sm text-gray-300">
              <Link href="/" className="hover:text-[#00D2FF] transition-colors font-medium">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="text-[#00D2FF] font-semibold">Services & Process</span>
            </nav>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F75BC] via-[#00D2FF] to-[#0F75BC]" />
      </section>

      {/* Section 2: Comprehensive Services Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="COMPREHENSIVE HYDRATION"
            highlightTitle="SERVICES"
            subtitle="Tailored water supply, smart dispenser hardware, and certified lab analysis for homes, offices, and luxury venues."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {serviceOfferings.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-md shadow-sm border border-[#EEEEEE] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-full bg-[#0F75BC]/10 text-[#0F75BC] flex items-center justify-center mb-6 group-hover:bg-[#0F75BC] group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0F75BC] text-xs font-bold uppercase tracking-wider inline-block mb-3">
                      {srv.tag}
                    </span>
                    <h3 className="text-xl font-bold font-display text-[#1A2346] mb-3 group-hover:text-[#0F75BC] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-[#555555] text-[15px] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0F75BC]">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Available 24/7
                    </span>
                    <Link href="/contact" className="hover:underline flex items-center gap-1 font-bold">
                      Book Service <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: 7-Stage Purification Process Section */}
      <div className="border-t border-[#EEEEEE]">
        <ProcessSection steps={steps} />
      </div>

      {/* Section 4: Why Choose Diablo Water (Quality Pillars) */}
      <section className="py-24 bg-[#F9F9F9] border-y border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Diablo Advantage"
            title="WHY LEADING CLIENTS"
            highlightTitle="CHOOSE DIABLO WATER"
            subtitle="Engineered with pharmaceutical precision and biological reverence for unmatched clarity and health."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-md shadow-sm border border-[#EEEEEE] space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#0F75BC]/10 text-[#0F75BC] flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold font-display text-[#1A2346]">{item.title}</h4>
                <p className="text-sm text-[#555555] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Statistics & Fact Counter */}
      <FactCounter />

      {/* Section 6: Client Testimonials */}
      {testimonials.length > 0 && <TestimonialSection testimonials={testimonials} />}

      {/* Section 7: FAQs Section */}
      {faqs.length > 0 && <FaqSection faqs={faqs} />}

      {/* Section 8: Call To Action Banner */}
      <section className="py-16 bg-[#1A2346] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[#00D2FF] font-semibold text-xs uppercase tracking-widest block mb-2">
              Ready to Upgrade Your Hydration?
            </span>
            <h3 className="text-3xl font-bold font-display">
              Schedule Your Pure Water Delivery or Office Cooler Today
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              Speak with our hydration specialists or order online with guaranteed next-day delivery.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/contact">
              <button className="px-8 py-4 bg-[#0F75BC] hover:bg-[#00D2FF] hover:text-[#1A2346] text-white font-semibold text-sm transition-all rounded-sm uppercase tracking-wider flex items-center gap-2">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
