'use client';

import React, { useEffect, useState } from 'react';
import { HeaderContainer } from '../components/layout/HeaderContainer';
import { Footer } from '../components/layout/Footer';
import { Preloader } from '../components/ui/Preloader';
import { WaterBubbles } from '../components/ui/WaterBubbles';
import { HeroSlider } from '../components/hero/HeroSlider';
import { HighlightCards } from '../components/hero/HighlightCards';
import { AboutSection } from '../components/about/AboutSection';
import { ProductsSection } from '../components/products/ProductsSection';
import { ProcessSection } from '../components/process/ProcessSection';
import { FactCounter } from '../components/stats/FactCounter';
import { TestimonialSection } from '../components/testimonials/TestimonialSection';
import { FaqSection } from '../components/faqs/FaqSection';
import { BlogSection } from '../components/blog/BlogSection';
import { ContactSection } from '../components/contact/ContactSection';
import { PromoCardsSection } from '../components/ui/PromoCardsSection';
import {
  fetchHero,
  fetchAbout,
  fetchProducts,
  fetchProcessSteps,
  fetchTestimonials,
  fetchFaqs,
  fetchBlogs,
} from '../services/api';
import {
  HeroSectionData,
  AboutSectionData,
  Product,
  ProcessStep,
  Testimonial,
  Faq,
  Blog,
} from '../types';

export default function HomePage() {
  const [hero, setHero] = useState<HeroSectionData | undefined>(undefined);
  const [about, setAbout] = useState<AboutSectionData | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function loadAllContent() {
      try {
        const [heroData, aboutData, prodsData, stepsData, testData, faqData, blogData] = await Promise.all([
          fetchHero(),
          fetchAbout(),
          fetchProducts(),
          fetchProcessSteps(),
          fetchTestimonials(),
          fetchFaqs(),
          fetchBlogs(),
        ]);
        setHero(heroData);
        setAbout(aboutData);
        setProducts(prodsData);
        setProcessSteps(stepsData);
        setTestimonials(testData);
        setFaqs(faqData);
        setBlogs(blogData);
      } catch (err) {
        console.error('Content fetch error:', err);
      }
    }

    loadAllContent();
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      {/* Liquid Preloader */}
      <Preloader />

      {/* Floating Ambient Background Bubbles */}
      <WaterBubbles />

      {/* Floating 2-Tier Glass Header Container */}
      <HeaderContainer />

      {/* 1. Multi-Slide Hero Carousel with 14-Step GSAP Timeline */}
      <HeroSlider />

      {/* 2. Sub-Hero Key Feature Highlights */}
      <HighlightCards />

      {/* 3. Story & Origin Section */}
      {about && <AboutSection data={about} />}

      {/* 4. Product Catalog Showcase */}
      {products.length > 0 && <ProductsSection products={products} />}

      {/* 5. 7-Stage Purification Pipeline */}
      {processSteps.length > 0 && <ProcessSection steps={processSteps} />}

      {/* 6. Scroll Count-up Fact Metrics */}
      <FactCounter />

      {/* Promo Cards Section (Added per user request) */}
      <PromoCardsSection />

      {/* 7. Fine Dining & Executive Testimonials */}
      {testimonials.length > 0 && <TestimonialSection testimonials={testimonials} />}

      {/* 8. Frequently Asked Questions Accordion */}
      {faqs.length > 0 && <FaqSection faqs={faqs} />}

      {/* 9. News & Hydration Insights Blog */}
      {blogs.length > 0 && <BlogSection blogs={blogs} />}

      {/* 10. Contact & Corporate Supply Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
