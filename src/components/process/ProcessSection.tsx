'use client';

import React, { useState } from 'react';
import { ProcessStep } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { Mountain, Layers, ShieldCheck, Waves, Sparkles, Sun, CheckCircle2, Droplet } from 'lucide-react';

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Mountain': return <Mountain className="w-8 h-8" />;
      case 'Layers': return <Layers className="w-8 h-8" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8" />;
      case 'Waves': return <Waves className="w-8 h-8" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8" />;
      case 'Sun': return <Sun className="w-8 h-8" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-8 h-8" />;
      default: return <Droplet className="w-8 h-8" />;
    }
  };

  const currentStep = steps[activeStep] || steps[0];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Proprietary Technology"
          title="OUR 7-STAGE MICRO-REFINEMENT"
          highlightTitle="PURIFICATION PIPELINE"
          subtitle="Every drop of Diablo Table Water undergoes rigorous 7-stage molecular treatment ensuring 99.99% purity."
        />

        {/* Step Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id || idx}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-3 px-6 py-3 rounded-sm transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0F75BC] text-white shadow-md border-b-4 border-[#095A91]'
                    : 'bg-[#F4F5F8] text-[#444444] hover:bg-[#E2E8F0] border-b-4 border-transparent'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                    isActive ? 'bg-white text-[#0F75BC]' : 'bg-[#D1D5DB] text-white'
                  }`}
                >
                  {step.stepNumber}
                </div>
                <span className="text-[15px] font-semibold">{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Card */}
        {currentStep && (
          <div className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-md p-10 md:p-16 max-w-4xl mx-auto shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-4 flex flex-col items-center text-center p-8 bg-white rounded-md border border-[#EEEEEE] shadow-sm">
                <div className="w-24 h-24 rounded-full bg-[#0F75BC]/10 mb-6 flex items-center justify-center text-[#0F75BC]">
                  {getIconComponent(currentStep.icon)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2">
                  Stage 0{currentStep.stepNumber} of 07
                </span>
                <span className="px-4 py-1.5 rounded-full bg-[#0F75BC]/10 text-[#0F75BC] text-xs font-bold uppercase tracking-wider">
                  {currentStep.highlightText}
                </span>
              </div>

              <div className="md:col-span-8 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-[#1A2346] font-display">
                  {currentStep.title}
                </h3>
                <p className="text-[#444444] text-[17px] leading-relaxed">
                  {currentStep.description}
                </p>

                <div className="pt-6 flex flex-wrap items-center justify-between border-t border-[#EEEEEE] text-[15px] text-[#888888]">
                  <span className="flex items-center gap-2 text-[#1A2346] font-semibold">
                    <Droplet className="w-5 h-5 text-[#0F75BC]" /> Continuous Quality Control
                  </span>
                  <span>Automated Sensor Logged</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
