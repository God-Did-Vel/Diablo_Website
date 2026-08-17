'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { submitContactForm } from '../../services/api';
import { SectionHeading } from '../ui/SectionHeading';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    companyName: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContactForm(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        companyName: '',
        message: '',
      });
    } catch (err) {
      alert('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="DISTRIBUTOR INQUIRY &"
          highlightTitle="CUSTOMER SUPPORT"
          subtitle="Whether you require corporate dispenser setup or fine-dining bottle supply, our hydration specialists respond within 2 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-md p-10 space-y-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1A2346] font-display">Corporate Headquarters</h3>

              <div className="space-y-6 text-[15px] text-[#444444]">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#0F75BC]/10 flex items-center justify-center text-[#0F75BC] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2346] mb-1">Springs Facility Address</h4>
                    <p>Aquapure Springs Valley, Diablo Water HQ 88</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#0F75BC]/10 flex items-center justify-center text-[#0F75BC] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2346] mb-1">Toll-Free Delivery Hotline</h4>
                    <p>1-800-500-333-33 (24/7 Support)</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#0F75BC]/10 flex items-center justify-center text-[#0F75BC] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2346] mb-1">Direct Email</h4>
                    <p>info@diablowater.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#EEEEEE] text-[14px] text-[#888888] leading-relaxed">
                <span className="font-semibold text-[#1A2346]">Service Coverage:</span> Nationwide Metropolitan Areas & Luxury Hospitality Distributors.
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#EEEEEE] rounded-md p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-bold text-[#1A2346]">Message Sent Successfully!</h3>
                  <p className="text-[17px] text-[#444444] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Diablo Table Water. Our customer representative will review your request and contact you shortly.
                  </p>
                  <button 
                    className="mt-6 px-8 py-3 bg-[#0F75BC] hover:bg-[#1A2346] text-white font-semibold text-sm transition-colors rounded-sm uppercase tracking-wider" 
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name *"
                        className="w-full px-5 py-4 rounded-sm bg-[#F9F9F9] border border-[#EEEEEE] text-[15px] text-[#444444] focus:outline-none focus:border-[#0F75BC] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email *"
                        className="w-full px-5 py-4 rounded-sm bg-[#F9F9F9] border border-[#EEEEEE] text-[15px] text-[#444444] focus:outline-none focus:border-[#0F75BC] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone Number"
                        className="w-full px-5 py-4 rounded-sm bg-[#F9F9F9] border border-[#EEEEEE] text-[15px] text-[#444444] focus:outline-none focus:border-[#0F75BC] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-5 py-4 rounded-sm bg-[#F9F9F9] border border-[#EEEEEE] text-[15px] text-[#444444] focus:outline-none focus:border-[#0F75BC] focus:bg-white transition-colors appearance-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Corporate Office Dispenser">Corporate Office Dispenser</option>
                        <option value="Hospitality & Restaurant Supply">Hospitality & Restaurant Supply</option>
                        <option value="Distributor Partnership">Distributor Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your hydration requirements... *"
                      className="w-full px-5 py-4 rounded-sm bg-[#F9F9F9] border border-[#EEEEEE] text-[15px] text-[#444444] focus:outline-none focus:border-[#0F75BC] focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#0F75BC] hover:bg-[#1A2346] text-white font-semibold text-sm transition-colors rounded-sm flex items-center justify-center gap-3 uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending Request...' : 'Submit Inquiry'} <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
