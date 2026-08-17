'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ShieldCheck, Droplet, Check } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="glass-card bg-diablo-card rounded-3xl max-w-2xl w-full p-6 md:p-8 relative border border-diablo-primary/40 shadow-glow-lg overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-diablo-surface text-diablo-muted hover:text-white hover:bg-diablo-border transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Bottle Image */}
            <div className="flex items-center justify-center bg-diablo-surface/50 rounded-2xl p-6 border border-diablo-border relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-72 object-contain filter drop-shadow-[0_20px_25px_rgba(0,240,255,0.3)]"
              />
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <Badge variant="cyan">{product.badge}</Badge>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-diablo-primary uppercase tracking-wider">
                  {product.packaging}
                </span>
                <h3 className="text-2xl font-black text-white font-display mt-1">{product.name}</h3>
                <div className="text-2xl font-black text-diablo-primary font-display mt-2">
                  ${product.price.toFixed(2)}
                </div>
              </div>

              <p className="text-sm text-diablo-muted leading-relaxed">{product.description}</p>

              {/* Water Specifications Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-diablo-surface p-3 rounded-xl border border-diablo-border text-center">
                  <span className="text-[10px] text-diablo-muted uppercase block">Alkalinity pH</span>
                  <span className="text-base font-bold text-white flex items-center justify-center gap-1">
                    <Droplet className="w-4 h-4 text-diablo-primary" /> {product.phLevel}
                  </span>
                </div>
                <div className="bg-diablo-surface p-3 rounded-xl border border-diablo-border text-center">
                  <span className="text-[10px] text-diablo-muted uppercase block">Total Minerals</span>
                  <span className="text-base font-bold text-white">{product.tdsLevel} ppm</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-diablo-muted pt-1">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" /> Hermetically sealed cobalt glass & PET
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-diablo-primary" /> 100% Free of Nitrates & Microplastics
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex gap-3">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={<ShoppingBag className="w-4 h-4" />}
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
