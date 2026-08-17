'use client';

import React, { useEffect, useState } from 'react';
import { Settings, Save } from 'lucide-react';
import { AdminSidebar } from '../../../../components/dashboard/AdminSidebar';
import { AdminHeader } from '../../../../components/dashboard/AdminHeader';
import { GlassCard } from '../../../../components/ui/GlassCard';
import { Button } from '../../../../components/ui/Button';
import { fetchSettings } from '../../../../services/api';
import { SiteSetting } from '../../../../types';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSetting | null>(null);

  useEffect(() => {
    fetchSettings().then(setSettings);
  }, []);

  const handleSave = () => {
    alert('Site Contact Settings Saved Successfully!');
  };

  return (
    <div className="min-h-screen bg-diablo-bg flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader title="Site Global Settings" subtitle="Update phone numbers, headquarters address, and operating hours" />

        <main className="p-8 space-y-6 flex-1 max-w-4xl">
          {settings && (
            <GlassCard className="p-8 border-diablo-border space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-diablo-border">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-diablo-primary" />
                  <h3 className="text-lg font-bold text-white font-display">Company Contact Information</h3>
                </div>
                <Button variant="primary" size="sm" icon={<Save className="w-4 h-4" />} onClick={handleSave}>
                  Save Settings
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-diablo-muted uppercase font-semibold mb-1">Primary Phone Hotline</label>
                  <input
                    type="text"
                    value={settings.phonePrimary}
                    onChange={(e) => setSettings({ ...settings, phonePrimary: e.target.value })}
                    className="w-full p-3 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-diablo-muted uppercase font-semibold mb-1">Support Email</label>
                  <input
                    type="email"
                    value={settings.emailSupport}
                    onChange={(e) => setSettings({ ...settings, emailSupport: e.target.value })}
                    className="w-full p-3 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-diablo-muted uppercase font-semibold mb-1">Facility Address</label>
                  <input
                    type="text"
                    value={settings.address}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                    className="w-full p-3 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-diablo-muted uppercase font-semibold mb-1">Operating Hours</label>
                  <input
                    type="text"
                    value={settings.workingHours}
                    onChange={(e) => setSettings({ ...settings, workingHours: e.target.value })}
                    className="w-full p-3 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                  />
                </div>
              </div>
            </GlassCard>
          )}
        </main>
      </div>
    </div>
  );
}
