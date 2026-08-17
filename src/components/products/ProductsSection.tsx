'use client';

import React, { useState } from 'react';
import { Product } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';

interface ProductsSectionProps {
  products: Product[];
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'GLASS RESERVE', 'DAILY ECO', 'FAMILY & OFFICE'];

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'GLASS RESERVE') return p.packaging.toLowerCase().includes('glass');
    if (activeCategory === 'DAILY ECO') return p.volume.includes('500') || p.volume.includes('1.5');
    if (activeCategory === 'FAMILY & OFFICE') return p.volume.includes('19') || p.volume.includes('1.5');
    return true;
  });

  return (
    <section className="py-24 bg-[#F9F9F9] border-t border-[#EEEEEE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Product Collection"
          title="PURE TABLE WATER FOR"
          highlightTitle="EVERY OCCASION"
          subtitle="Explore our luxury glass editions, active daily eco bottles, and enterprise office dispenser jars."
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-sm text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#0F75BC] text-white shadow-md'
                  : 'bg-white text-[#444444] border border-[#EEEEEE] hover:bg-[#F4F5F8] hover:text-[#1A2346]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};
