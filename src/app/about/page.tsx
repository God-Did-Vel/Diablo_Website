'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { TopHeader } from '../../components/layout/TopHeader';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { AboutSection } from '../../components/about/AboutSection';
import { FactCounter } from '../../components/stats/FactCounter';
import { TestimonialSection } from '../../components/testimonials/TestimonialSection';
import { FaqSection } from '../../components/faqs/FaqSection';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { fetchAbout, fetchTestimonials, fetchFaqs } from '../../services/api';
import { AboutSectionData, Testimonial, Faq } from '../../types';
import {
  Droplets,
  ShieldCheck,
  Leaf,
  Users,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Factory,
  ChevronRight,
} from 'lucide-react';

export default function AboutPage() {
  const [about, setAbout] = useState<AboutSectionData | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);

  useEffect(() => {
    fetchAbout().then(setAbout);
    fetchTestimonials().then(setTestimonials);
    fetchFaqs().then(setFaqs);
  }, []);

  const coreValues = [
    {
      icon: Droplets,
      title: 'Uncompromising Purity',
      description: 'Drawn from subterranean volcanic aquifers and filtered through 7 molecular micro-stages down to 0.0001 microns.',
    },
    {
      icon: ShieldCheck,
      title: 'Scientific Precision',
      description: 'We test batch parameters every 30 minutes in our ISO-certified laboratories to guarantee optimal pH 7.8.',
    },
    {
      icon: Leaf,
      title: 'Eco Stewardship',
      description: 'Committed to circular packaging, using 100% BPA-free recycled rPET, reusable cobalt glass, and zero aquifer depletion.',
    },
    {
      icon: Users,
      title: 'Community Health',
      description: 'We dedicate 5% of annual output to clean water access and borehole development for underserved communities.',
    },
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Aquifer Discovery',
      description: 'Geologists discover deep subterranean volcanic aquifers 300 meters beneath protected bedrock with extraordinary natural mineral balance.',
    },
    {
      year: '2014',
      title: 'First Purification Facility',
      description: 'Completed construction of our clean-room robotic bottling plant with 7-stage dual-pass reverse osmosis filtration.',
    },
    {
      year: '2019',
      title: 'Sustainable Packaging Shift',
      description: 'Pioneered 100% rPET recycled bottles and launched our signature Diablo Cobalt Glass Reserve line for luxury dining.',
    },
    {
      year: '2024',
      title: 'Global Purity Recognition',
      description: 'Awarded ISO 22000 & International Water Quality Excellence recognition serving over 100,000 satisfied homes and enterprises.',
    },
  ];

  const certifications = [
    { name: 'ISO 22000 Certified', desc: 'Food Safety & Quality Management System' },
    { name: 'FDA Registered', desc: 'Compliant with US Food & Drug Safety Standards' },
    { name: 'NSF International 60/61', desc: 'Verified Clean Drinking Water System Components' },
    { name: 'HACCP Accredited', desc: 'Hazard Analysis Critical Control Point Purity' },
    { name: 'WHO Benchmark', desc: 'Meets Global World Health Organization Potable Standards' },
    { name: 'Zero Microplastics', desc: 'Independently Lab-Certified Particle Free' },
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
              About Diablo Table Water
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-sm">
              Crafted by Nature, Perfected by Science
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl">
              Discover our heritage, volcanic aquifer origins, robotic clean-room bottling facility, and our relentless passion for purest alkaline hydration.
            </p>
            <nav className="mt-8 flex items-center gap-2 text-sm text-gray-300">
              <Link href="/" className="hover:text-[#00D2FF] transition-colors font-medium">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="text-[#00D2FF] font-semibold">About Us</span>
            </nav>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F75BC] via-[#00D2FF] to-[#0F75BC]" />
      </section>

      {/* Section 2: Main Story & Origin Section */}
      <div className="pt-6">
        {about && <AboutSection data={about} />}
      </div>

      {/* Section 3: Mission, Vision & Core Values */}
      <section className="py-24 bg-[#F9F9F9] border-y border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Guiding Pillars"
            title="CORE VALUES &"
            highlightTitle="OUR MISSION"
            subtitle="We exist to elevate daily living by providing refreshing table water crafted with biological harmony and ecological reverence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-md shadow-sm border border-[#EEEEEE] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0F75BC]/10 flex items-center justify-center text-[#0F75BC] group-hover:bg-[#0F75BC] group-hover:text-white transition-colors mb-6">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#1A2346] mb-3 group-hover:text-[#0F75BC] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-[#444444] text-[15px] leading-relaxed">
                    {val.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0F75BC] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: State-of-the-Art Bottling Facility & Innovation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#0F75BC] font-semibold text-lg flex items-center gap-2">
                <span className="w-10 h-0.5 bg-[#0F75BC]"></span>
                Industrial Excellence
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1A2346] leading-tight">
                Robotic Clean-Room Facility & Molecular Testing
              </h2>
              <p className="text-[#444444] leading-relaxed text-[17px]">
                Our modern bottling center operates under Class 1000 sterile air pressure. Automated robotic arms fill and seal every bottle under ozonated air to prevent airborne contamination.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 bg-[#F9F9F9] rounded-md border border-[#EEEEEE]">
                  <Factory className="w-6 h-6 text-[#0F75BC] shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-[#1A2346] text-[16px]">750,000+ Liters Daily Capacity</h5>
                    <p className="text-sm text-[#555555]">Continuous high-speed bottling maintaining strict temperature and micro-filtration standards.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F9F9F9] rounded-md border border-[#EEEEEE]">
                  <Sparkles className="w-6 h-6 text-[#0F75BC] shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-[#1A2346] text-[16px]">Real-Time Spectrophotometry</h5>
                    <p className="text-sm text-[#555555]">Automated inline sensors scan every batch for mineral ppm, pH, and clarity every 60 seconds.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://res.cloudinary.com/duweg8kpv/image/upload/v1786241718/FLSK_at28ug.png"
                  alt="Diablo Bottling Facility"
                  className="w-full h-[460px] object-cover rounded-md shadow-2xl bg-[#F4F5F8]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 bg-[#1A2346] text-white p-6 rounded-md shadow-xl z-20">
                <span className="text-[#00D2FF] font-bold text-3xl font-display block">100% Sterile</span>
                <span className="text-sm text-gray-300">Clean-room certified with Zero Human Contact during filling.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Heritage & Milestones Timeline */}
      <section className="py-24 bg-[#F4F5F8] border-t border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="THE EVOLUTION OF"
            highlightTitle="DIABLO WATER"
            subtitle="From deep subterranean aquifer exploration to an internationally acclaimed brand."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {milestones.map((ms, idx) => (
              <div key={idx} className="bg-white p-8 rounded-md shadow-sm border border-[#EEEEEE] relative">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#0F75BC] text-white font-bold text-sm mb-4">
                  {ms.year}
                </div>
                <h4 className="text-xl font-bold font-display text-[#1A2346] mb-3">
                  {ms.title}
                </h4>
                <p className="text-[#444444] text-[15px] leading-relaxed">
                  {ms.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#0F75BC] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" /> Completed Milestone
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Certifications & Accreditations */}
      <section className="py-20 bg-white border-b border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Global Trust"
            title="CERTIFICATIONS &"
            highlightTitle="STANDARDS"
            subtitle="Our facility and products are rigorously audited and accredited by leading international health and safety agencies."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-6 bg-[#F9F9F9] rounded-md border border-[#EEEEEE] hover:border-[#0F75BC] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#0F75BC]/10 flex items-center justify-center shrink-0 text-[#0F75BC]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2346] text-[16px]">{cert.name}</h4>
                  <p className="text-xs text-[#666666] mt-0.5">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Fact Counter */}
      <FactCounter />

      {/* Section 8: Testimonials */}
      {testimonials.length > 0 && <TestimonialSection testimonials={testimonials} />}

      {/* Section 9: FAQs */}
      {faqs.length > 0 && <FaqSection faqs={faqs} />}

      {/* Section 10: Call to Action Banner */}
      <section className="py-16 bg-[#1A2346] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[#00D2FF] font-semibold text-xs uppercase tracking-widest block mb-2">
              Experience Diablo Water
            </span>
            <h3 className="text-3xl font-bold font-display">
              Ready to Upgrade Your Daily Hydration?
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              Order your personal bottles, family packs, or schedule office dispenser delivery.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/products">
              <button className="px-8 py-4 bg-[#0F75BC] hover:bg-[#00D2FF] hover:text-[#1A2346] text-white font-semibold text-sm transition-all rounded-sm uppercase tracking-wider flex items-center gap-2">
                Shop Products <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
