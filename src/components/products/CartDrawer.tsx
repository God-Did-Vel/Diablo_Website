'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';

export const CartDrawer: React.FC = () => {
  const { cart, isOpen, setIsOpen, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-md bg-diablo-bg border-l border-diablo-primary/30 h-full flex flex-col justify-between shadow-2xl relative"
        >
          {/* Header */}
          <div className="p-6 border-b border-diablo-border flex justify-between items-center bg-diablo-surface/80">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-diablo-primary" />
              <h3 className="text-lg font-bold text-white font-display">Your Water Order</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full text-diablo-muted hover:text-white hover:bg-diablo-border"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-diablo-surface border border-diablo-border flex items-center justify-center mx-auto text-diablo-muted">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-diablo-muted text-sm">Your order cart is empty.</p>
                <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                  Explore Products
                </Button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="glass-card p-4 rounded-2xl border border-diablo-border flex items-center gap-4"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-16 h-20 object-contain"
                  />

                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white leading-snug">{item.product.name}</h4>
                    <p className="text-xs text-diablo-muted">{item.product.volume}</p>
                    <div className="text-sm font-black text-diablo-primary font-display mt-1">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 bg-diablo-surface p-1 rounded-lg border border-diablo-border">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 hover:text-diablo-primary text-diablo-muted"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold text-white px-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 hover:text-diablo-primary text-diablo-muted"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-1.5 text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-diablo-border bg-diablo-surface/90 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-diablo-muted">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-diablo-muted">
                  <span>Delivery Fee</span>
                  <span className="text-emerald-400 font-semibold">FREE (Express Delivery)</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-diablo-border">
                  <span>Total</span>
                  <span className="text-diablo-primary font-display">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => {
                  alert('Thank you for ordering Diablo Table Water! Our logistics team will process your order immediately.');
                  clearCart();
                  setIsOpen(false);
                }}
              >
                Proceed to Checkout
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-diablo-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Encrypted & Safe Order Guarantee</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
