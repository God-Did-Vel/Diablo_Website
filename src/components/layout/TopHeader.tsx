'use client';

import React from 'react';
import { Phone, Clock, Mail, MapPin } from 'lucide-react';

export const TopHeader: React.FC = () => {
  return (
    <div className="bg-[#1A2346] text-white text-[13px] hidden lg:block transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-12">
        {/* Left Info */}
        <div className="flex items-center">
          <div className="bg-[#0F75BC] h-12 flex items-center px-6 mr-6 skew-x-[-15deg]">
            <p className="font-semibold skew-x-[15deg]">Immediate Delivery</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-[#00D2FF] transition-colors cursor-pointer">
              <Phone className="w-4 h-4 text-[#00D2FF]" />
              <a href="tel:180050033333" className="font-medium">1-800-500-333-33</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#00D2FF]" />
              <span>Mon - Fri: 08.00 to 08.00</span>
            </div>
          </div>
        </div>

        {/* Right Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#00D2FF]" />
            <p>Enquire? <a href="mailto:info@example.com" className="font-medium hover:text-[#00D2FF] transition-colors underline">Send Your Mail</a></p>
          </div>
          <div className="h-6 w-px bg-white/20" />
          <div className="flex items-center gap-2 cursor-pointer group">
            <MapPin className="w-4 h-4 text-[#00D2FF]" />
            <select className="bg-transparent text-white border-none outline-none cursor-pointer group-hover:text-[#00D2FF] transition-colors appearance-none">
               <option className="text-black" value="">Service Area</option>
               <option className="text-black" value="1">Albania</option>
               <option className="text-black" value="2">Canada</option>
               <option className="text-black" value="3">India</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
