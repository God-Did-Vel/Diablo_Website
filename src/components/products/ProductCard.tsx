'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Star, Droplet } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-md p-6 relative flex flex-col justify-between group border border-[#EEEEEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top Badge */}
      <div className="flex justify-between items-center mb-4 z-10 relative">
        {product.badge ? (
          <Badge variant="cyan">{product.badge}</Badge>
        ) : (
          <Badge variant="blue">{product.volume}</Badge>
        )}

        <div className="flex items-center gap-1 text-[#C6A15B] text-xs font-bold bg-[#F9F7F2] px-2.5 py-1 rounded-sm border border-[#EEEEEE]">
          <Star className="w-3.5 h-3.5 fill-[#C6A15B]" />
          <span>4.9</span>
        </div>
      </div>

      {/* Image Display - fixed-size stage so every product renders at the same scale */}
      <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden mb-4">
        {/* Subtle background circle behind product */}
        <div className="absolute w-40 h-40 bg-[#F4F5F8] rounded-full group-hover:scale-110 transition-transform duration-500"></div>
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="max-h-[85%] max-w-[80%] w-auto h-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-lg mx-auto"
        />

        {/* Overlay Quick View Button */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
          <button
            onClick={() => onQuickView(product)}
            className="p-4 rounded-full bg-[#0A2E44] text-white hover:bg-[#C6A15B] transition-colors shadow-md transform translate-y-4 group-hover:translate-y-0 duration-300"
            title="Quick Preview"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="space-y-3 relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-[#888888] font-medium mb-1 uppercase tracking-wider">{product.packaging} • {product.volume}</p>
            <h3 className="text-[19px] font-bold text-[#0A2E44] group-hover:text-[#C6A15B] transition-colors font-display leading-tight">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="text-left mt-2">
          <span className="text-2xl font-black text-[#0A2E44] font-display">${product.price.toFixed(2)}</span>
        </div>

        {/* Water Quality Quick Indicators */}
        <div className="flex items-center justify-between text-xs text-[#888888] pt-3 pb-3 border-y border-[#EEEEEE] mt-4">
          <span className="flex items-center gap-1 text-[#C6A15B] font-semibold">
            <Droplet className="w-3.5 h-3.5" /> pH {product.phLevel}
          </span>
          <span>TDS {product.tdsLevel} ppm</span>
        </div>

        {/* Add to Cart CTA */}
        <button
          className="w-full mt-4 py-3.5 bg-[#F4F5F8] hover:bg-[#0A2E44] text-[#0A2E44] hover:text-white font-semibold text-sm transition-colors rounded-sm flex items-center justify-center gap-2"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag className="w-4 h-4" /> Add to Order
        </button>
      </div>
    </motion.div>
  );
};