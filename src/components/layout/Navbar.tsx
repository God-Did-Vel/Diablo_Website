"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

interface NavbarProps {
  isScrolled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled = false }) => {
  const pathname = usePathname();
  const { totalItems, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: true },
    {
      name: "Services",
      href: "/process",
      hasDropdown: true,
      subItems: [
        { name: "7-Stage Purification Process", href: "/process" },
        { name: "Deep Aquifer Water Extraction", href: "/process" },
        { name: "Reverse Osmosis Filtration", href: "/process" },
        { name: "Residential Water Delivery", href: "/process" },
        { name: "Commercial & Office Supply", href: "/process" },
        { name: "Water Quality Lab Testing", href: "/process" },
        { name: "Dispenser Maintenance & Care", href: "/process" },
      ],
    },
    {
      name: "Products",
      href: "/products",
      hasDropdown: true,
      subItems: [
        { name: "Diablo Reserve Glass (750ml)", href: "/products" },
        { name: "Diablo Active Daily Eco (500ml)", href: "/products" },
        { name: "Diablo Hydro Family Pack (1.5L)", href: "/products" },
        { name: "Diablo Office Dispenser Jar (19L)", href: "/products" },
        { name: "Alkaline Mineral Enriched Edition", href: "/products" },
        { name: "Premium Bulk & Crate Delivery", href: "/products" },
        { name: "Hot & Cold Smart Water Dispensers", href: "/products" },
      ],
    },
    {
      name: "Blog",
      href: "/blog",
      hasDropdown: true,
      subItems: [
        { name: "All Hydration News & Articles", href: "/blog" },
        {
          name: "Science of Optimal Hydration & pH",
          href: "/blog/science-of-optimal-hydration-ph-balance",
        },
        {
          name: "Zero Microplastics Protection Guide",
          href: "/blog/zero-microplastics-7-stage-filtration-protection",
        },
        {
          name: "Alkaline vs Purified Water Analysis",
          href: "/blog/alkaline-vs-purified-water-guide",
        },
        { name: "Daily Electrolytes & Vitality", href: "/blog" },
        { name: "Aquifer Sustainability & Ecology", href: "/blog" },
        { name: "Corporate Hydration & Wellness Tips", href: "/blog" },
      ],
    },
    {
      name: "Pages",
      href: "/about",
      hasDropdown: true,
      subItems: [
        { name: "About Diablo Table Water", href: "/about" },
        { name: "Our Heritage & Volcanic Aquifers", href: "/about" },
        { name: "Core Mission, Vision & Values", href: "/about" },
        { name: "Purity Standards & Certifications", href: "/about" },
        { name: "Executive Client Testimonials", href: "/about" },
        { name: "Frequently Asked Questions (FAQ)", href: "/about" },
        { name: "Eco-Commitment & Planet Health", href: "/about" },
      ],
    },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
    >
      <nav
        className={`bg-white shadow-lg rounded-sm relative z-50 transition-all duration-300 ${isScrolled ? "py-3 px-4 sm:px-6" : "py-4 px-4 sm:px-8"}`}
      >
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Diablo Water"
              className="h-10 object-contain hidden"
            />
            {/* Fallback text logo if image is missing */}
            <div className="flex flex-col leading-none">
              <span className="text-2xl sm:text-3xl font-display font-bold text-[#1A2346]">
                Diablo
              </span>
              <span className="text-[10px] sm:text-xs font-display font-medium tracking-[0.25em] uppercase text-[#0F75BC] mt-1">
                Table Water
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`text-[15px] font-semibold transition-all flex items-center gap-1 py-2 ${
                      isActive
                        ? "text-[#0F75BC]"
                        : "text-[#1A2346] hover:text-[#0F75BC]"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <span className="text-[10px] ml-1">▼</span>
                    )}
                  </Link>
                  {/* Active line indicator matching Aguapure */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0F75BC]" />
                  )}
                  {/* Dropdown Menu */}
                  {link.subItems && (
                    <div className="absolute top-full left-0 mt-0 w-72 bg-white shadow-xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100 divide-y divide-gray-50 py-1">
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2.5 text-[13.5px] text-[#1A2346] hover:bg-blue-50/70 hover:text-[#0F75BC] transition-colors font-medium"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Header Action Icons & Quote Button */}
          <div className="flex items-center gap-5 shrink-0">
            <button
              className="text-[#1A2346] hover:text-[#0F75BC] transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="relative text-[#1A2346] hover:text-[#0F75BC] transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#0F75BC] text-white font-semibold text-[10px] flex items-center justify-center">
                {totalItems || 0}
              </span>
            </button>

            <Link
              href="/contact"
              className="hidden sm:inline-flex ml-2 md:ml-4"
            >
              <button className="px-6 md:px-8 py-3 bg-[#0F75BC] hover:bg-[#1A2346] text-white font-semibold text-sm transition-colors rounded-sm uppercase tracking-wider">
                GET A QUOTE
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1A2346]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white shadow-xl rounded-sm border border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col py-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[15px] font-semibold text-[#1A2346] hover:text-[#0F75BC] py-3 px-6 border-b border-gray-50"
                  >
                    {link.name}
                  </Link>
                  {link.subItems && (
                    <div className="bg-gray-50">
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 px-8 text-sm text-[#1A2346] hover:text-[#0F75BC] border-b border-gray-100"
                        >
                          - {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-6">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full py-3.5 bg-[#0F75BC] text-white font-semibold text-sm rounded-sm uppercase tracking-wider">
                    GET A QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
