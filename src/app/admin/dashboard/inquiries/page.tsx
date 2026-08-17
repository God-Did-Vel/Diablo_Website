'use client';

import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, CheckCircle, Clock } from 'lucide-react';
import { AdminSidebar } from '../../../../components/dashboard/AdminSidebar';
import { AdminHeader } from '../../../../components/dashboard/AdminHeader';
import { GlassCard } from '../../../../components/ui/GlassCard';
import { ContactSubmission } from '../../../../types';

const MOCK_INQUIRIES: ContactSubmission[] = [
  {
    id: 'inq-1',
    name: 'Robert Sterling',
    email: 'robert@nexuscorp.com',
    phone: '+1 (555) 234-5678',
    subject: 'Corporate Office Dispenser Supply',
    companyName: 'Nexus Global Tech',
    message: 'We require thirty 19L Diablo water jars delivered weekly to our headquarters downtown.',
    status: 'NEW',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'inq-2',
    name: 'Chef Laurent Francois',
    email: 'laurent@letoiledining.com',
    phone: '+1 (555) 876-5432',
    subject: 'Hospitality & Restaurant Supply',
    companyName: 'L’Étoile Restaurant Group',
    message: 'Interested in purchasing 50 cases of Diablo Reserve 750ml glass bottles monthly.',
    status: 'CONTACTED',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<ContactSubmission[]>(MOCK_INQUIRIES);

  const handleStatusChange = (id: string, status: 'NEW' | 'CONTACTED' | 'RESOLVED') => {
    setInquiries(inquiries.map((inq) => (inq.id === id ? { ...inq, status } : inq)));
  };

  return (
    <div className="min-h-screen bg-diablo-bg flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader title="Customer & Distributor Inquiries" subtitle="Manage incoming web contact form submissions" />

        <main className="p-8 space-y-6 flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white font-display">Submitted Contact Requests</h2>
            <span className="text-xs text-diablo-muted">{inquiries.length} Total Submissions</span>
          </div>

          <div className="space-y-4">
            {inquiries.map((inq) => (
              <GlassCard key={inq.id} className="p-6 border-diablo-border space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-white">{inq.name}</h3>
                    <div className="flex items-center gap-4 text-xs text-diablo-muted mt-1">
                      <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-diablo-primary" /> {inq.email}</span>
                      {inq.phone && <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-diablo-primary" /> {inq.phone}</span>}
                    </div>
                  </div>

                  {/* Status Dropdown */}
                  <select
                    value={inq.status}
                    onChange={(e) => handleStatusChange(inq.id, e.target.value as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
                      inq.status === 'NEW'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        : inq.status === 'CONTACTED'
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    }`}
                  >
                    <option value="NEW">NEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="RESOLVED">RESOLVED</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-diablo-surface/80 border border-diablo-border text-xs space-y-1">
                  <span className="text-diablo-primary font-bold">{inq.subject} {inq.companyName && `• ${inq.companyName}`}</span>
                  <p className="text-diablo-text leading-relaxed mt-1">{inq.message}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
