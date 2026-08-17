"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Youtube } from "lucide-react";

interface SlideData {
  id: number;
  bgImage: string;
  headline: React.ReactNode;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  cardImage: string;
  bottleImage: string;
  badgeImage: string;
}

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    {
      id: 1,
      bgImage:
        "https://res.cloudinary.com/duweg8kpv/image/upload/v1786238784/D27_yhsv7u.jpg",
      headline: (
        <>
          Pure refreshing water <br /> made for everyday life.
        </>
      ),
      subtitle:
        "From your home to the office, events and beyond, DIABLO TABLE WATER delivers quality you can count on.",
      ctaText: "Discover More",
      ctaLink: "/about",
      cardImage:
        "https://res.cloudinary.com/duweg8kpv/image/upload/v1785943488/D8_ydgtdw.jpg",
      bottleImage:
        "https://res.cloudinary.com/duweg8kpv/image/upload/v1786527338/botlle_D1-removebg-preview_tw8z40.png",
      badgeImage: "/images/hero-badge.png",
    },
    {
      id: 2,
      bgImage:
        "https://res.cloudinary.com/duweg8kpv/image/upload/v1786236032/D17_t8ncle.jpg",
      headline: (
        <>
          Always Want <br /> Safe and Good Water <br /> for Healthy Life
        </>
      ),
      subtitle:
        "Always ensure you are drinking safe and clean water for a healthy life. Pure water is essential for your well-being.",
      ctaText: "Discover More",
      ctaLink: "/about",
      cardImage:
        "https://res.cloudinary.com/duweg8kpv/image/upload/v1786238784/D28_gfbufy.jpg",
      bottleImage:
        "https://res.cloudinary.com/duweg8kpv/image/upload/v1786630277/D37-removebg-preview_yeryvv.png",
      badgeImage: "/images/hero-badge.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[600px] md:h-[800px] lg:h-[900px] overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ${
                isActive ? "scale-105" : "scale-100"
              }`}
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Left Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
              <div className="max-w-2xl text-left w-full lg:w-1/2">
                <h1
                  className={`text-3xl md:text-5xl lg:text-[70px] leading-[1.1] font-display font-bold text-white  transition-all duration-1000 delay-300 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {slide.headline}
                </h1>
                <p
                  className={`text-lg md:text-xl text-white/90 mb-10 transition-all duration-1000 delay-500 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>
                <div
                  className={`flex flex-wrap items-center gap-4 mt-[-9px] transition-all duration-1000 delay-700 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <Link href={slide.ctaLink}>
                    <button className="px-10 py-4 bg-[#0F75BC] border border-white/30 text-white font-medium text-[13px] tracking-[0.2em] uppercase rounded-sm hover:bg-transparent hover:border-white transition-all duration-500">
                      {slide.ctaText}
                    </button>
                  </Link>
                  <Link
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center gap-2 px-10 py-4 border border-white/70 hover:bg-white hover:text-[#0F75BC] text-white font-semibold text-sm transition-colors rounded-sm uppercase tracking-wider">
                      <Youtube className="w-4 h-4" strokeWidth={2} />
                      Watch Us on YouTube
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side Composition (Card + Bottle) - desktop/tablet only */}
            <div className="absolute bottom-0 right-0 w-1/2 h-3/5 max-w-none z-20 hidden md:block overflow-visible">
              {/* Card Background Image - slides in from the left */}
              <img
                src={slide.cardImage}
                alt="Card Background"
                className={`absolute inset-0 w-full h-full object-cover rounded-l-[40px] transition-all duration-[1200ms] ease-out delay-[800ms] ${
                  isActive
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              />

              {/* Bottle Image - centered in the card, slides up from below */}
              <img
                src={slide.bottleImage}
                alt="Bottle"
                className={`absolute left-1/2 top-3/5 -translate-x-1/2 w-[60%] md:w-[70%] max-w-none h-auto object-contain transition-all duration-[1200ms] ease-out delay-[1300ms] ${
                  isActive
                    ? "-translate-y-1/2 opacity-100"
                    : "translate-y-[60%] opacity-0"
                }`}
              />
            </div>

            {/* Promo Circle Badge - replaces old badge image, visible on ALL screen sizes */}
            <div
              className={`absolute z-30 top-[350px] right-4 sm:top-8 sm:right-8 md:top-[300px] md:right-[95px] transition-all duration-[800ms] ease-out delay-[1800ms] ${
                isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                {" "}
                {/* Gold ring circle - offset to tangle/interlock with the disc */}
                <div className="absolute inset-0 -translate-x-1.5 -translate-y-1.5 rounded-full border border-[#C6A15B]" />
                {/* Solid navy disc - offset opposite direction, overlapping the ring */}
                <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-full bg-[#0A2E44] shadow-md ring-1 ring-[#C6A15B]/60 flex flex-col items-center justify-center text-center px-3">
                  <p
                    className="text-[#C6A15B] text-[8px] sm:text-[9px] md:text-[10px] font-medium tracking-[0.15em] uppercase leading-none"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Limited Time
                  </p>
                  <p className="text-white text-base sm:text-lg md:text-xl font-semibold leading-none mt-1.5">
                    20% Off
                  </p>
                  <p className="text-white/60 text-[7px] sm:text-[8px] md:text-[9px] font-normal tracking-wide leading-none mt-1.5">
                    First Order Only
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-[#0F75BC]"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
