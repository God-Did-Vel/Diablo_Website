"use client";

import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // In a real app, this would send to an API.
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1A2346] p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-semibold font-display">Diablo Support</h3>
                <p className="text-xs text-blue-200">We usually reply in a few minutes.</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-64 bg-gray-50 p-4 overflow-y-auto">
              <div className="flex flex-col gap-3">
                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-gray-700 max-w-[85%] self-start border border-gray-100">
                  Hello! How can we help you with your hydration needs today?
                </div>
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#0F75BC] focus:ring-1 focus:ring-[#0F75BC] text-gray-800"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="p-2 bg-[#0F75BC] text-white rounded-full hover:bg-[#1A2346] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0F75BC] hover:bg-[#1A2346] text-white rounded-full shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F75BC]"
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};
