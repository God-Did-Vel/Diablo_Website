'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] border-t-4 border-[#0F75BC] pt-16 pb-6 text-[#A0A0A0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#222222]">
          
          {/* Column 1: About */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img src="/logo-white.png" alt="Diablo Water" className="h-12 object-contain hidden" />
              <span className="text-3xl font-display font-bold text-white">Diablo</span>
            </Link>
            <p className="text-[15px] leading-relaxed">
              We provide the highest quality purified drinking water. Sourced from natural aquifers and filtered through our advanced 7-stage process to ensure crisp, clean hydration for you and your family.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#222222] hover:bg-[#0F75BC] text-white flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#222222] hover:bg-[#0F75BC] text-white flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#222222] hover:bg-[#0F75BC] text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#222222] hover:bg-[#0F75BC] text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-display font-bold text-white relative inline-block pb-3">
              Explore Links
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#0F75BC]"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-[#0F75BC] transition-colors flex items-center gap-2"><span className="text-[#0F75BC]">›</span> About Company</Link></li>
              <li><Link href="/services" className="hover:text-[#0F75BC] transition-colors flex items-center gap-2"><span className="text-[#0F75BC]">›</span> Our Services</Link></li>
              <li><Link href="/products" className="hover:text-[#0F75BC] transition-colors flex items-center gap-2"><span className="text-[#0F75BC]">›</span> Shop Products</Link></li>
              <li><Link href="/blog" className="hover:text-[#0F75BC] transition-colors flex items-center gap-2"><span className="text-[#0F75BC]">›</span> News & Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#0F75BC] transition-colors flex items-center gap-2"><span className="text-[#0F75BC]">›</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-display font-bold text-white relative inline-block pb-3">
              Contact Info
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#0F75BC]"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#0F75BC] shrink-0 mt-1" />
                <span className="text-[15px]">123 Aguapure Street, Spring Valley, NY 10001, USA</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#0F75BC] shrink-0" />
                <a href="tel:180050033333" className="text-[15px] hover:text-white transition-colors">1-800-500-333-33</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#0F75BC] shrink-0" />
                <a href="mailto:info@diablowater.com" className="text-[15px] hover:text-white transition-colors">info@diablowater.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-display font-bold text-white relative inline-block pb-3">
              Newsletter
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#0F75BC]"></span>
            </h4>
            <p className="text-[15px] leading-relaxed">
              Subscribe to our newsletter for latest updates, discounts, and pure water insights.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-4 bg-[#222222] border-none text-white focus:outline-none focus:ring-1 focus:ring-[#0F75BC] text-[15px]"
              />
              <button type="button" className="absolute right-0 top-0 bottom-0 px-5 bg-[#0F75BC] hover:bg-white hover:text-[#0F75BC] transition-colors flex items-center justify-center">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>© {new Date().getFullYear()} <span className="text-white">Diablo Water</span>. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/admin/login" className="hover:text-[#0F75BC] transition-colors">Admin CMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
