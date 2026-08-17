"use client";

import React from "react";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { AboutSectionData } from "../../types";
import { SectionHeading } from "../ui/SectionHeading";

interface AboutSectionProps {
  data: AboutSectionData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image & Experience Badge Side */}
          <div className="relative">
            <div className="relative z-10 pr-10 pb-10">
              <img
                src="https://res.cloudinary.com/duweg8kpv/image/upload/v1786238095/d22update_tsbdhj.png"
                alt="Water purity"
                className="w-full h-[500px] object-cover rounded-md shadow-xl"
              />
            </div>
            {/* Background Accent Box */}
            <div className="absolute top-10 left-10 right-0 bottom-0 border-4 border-[#0F75BC] rounded-md z-0"></div>

            {/* Floating Experience Badge */}
            <div className="absolute bottom-4 right-0 bg-[#0F75BC] text-white p-8 rounded-md shadow-lg z-20 flex flex-col items-center justify-center min-w-[180px]">
              <span className="text-5xl font-display font-bold leading-none mb-1">
                {data.yearsExperience || 25}+
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Years of <br /> Experience
              </span>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="space-y-6">
            <div className="mb-4">
              <span className="text-[#0F75BC] font-semibold text-lg flex items-center gap-2">
                <span className="w-10 h-0.5 bg-[#0F75BC]"></span>
                About Diablo Water
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1A2346] mt-3 leading-tight">
                {data.title || "Pure & Healthy Drinking Water."}
              </h2>
            </div>

            <p className="text-[#444444] leading-relaxed text-[17px]">
              {data.storyText ||
                "At Diablo Table Water, we believe water is not just liquid—it is the essence of energy, health, and vitality. Originating deep within protected natural aquifers, our pristine source is enriched with essential natural electrolytes before undergoing sophisticated molecular filtration."}
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0F75BC]/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#0F75BC]" />
                </div>
                <span className="text-[17px] font-semibold text-[#1A2346]">
                  {data.purityGuarantee ||
                    "100% Free of Microplastics and Heavy Metals"}
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0F75BC]/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#0F75BC]" />
                </div>
                <span className="text-[17px] font-semibold text-[#1A2346]">
                  Naturally Enriched with Electrolytes
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0F75BC]/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#0F75BC]" />
                </div>
                <span className="text-[17px] font-semibold text-[#1A2346]">
                  Sustainable & Eco-friendly Packaging
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-8 pt-6">
              <button className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-[#0F75BC] hover:bg-[#1A2346] text-white font-semibold text-xs sm:text-xs transition-colors rounded-sm uppercase tracking-wider">
                Discover More
              </button>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0F75BC]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#0F75BC]" />
                </div>
                <div>
                  <span className="block text-xs text-[#444444]">
                    Certified Quality
                  </span>
                  <span className="block font-bold text-[#1A2346]">
                    ISO & FDA Approved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
