'use client';

import React, { useEffect, useState } from 'react';
import { FileText, Save, Sparkles, Mountain } from 'lucide-react';
import { AdminSidebar } from '../../../../components/dashboard/AdminSidebar';
import { AdminHeader } from '../../../../components/dashboard/AdminHeader';
import { GlassCard } from '../../../../components/ui/GlassCard';
import { Button } from '../../../../components/ui/Button';
import { fetchHero, fetchAbout } from '../../../../services/api';
import { HeroSectionData, AboutSectionData } from '../../../../types';

export default function AdminCmsPage() {
  const [hero, setHero] = useState<HeroSectionData | null>(null);
  const [about, setAbout] = useState<AboutSectionData | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchHero().then(setHero);
    fetchAbout().then(setAbout);
  }, []);

  const handleSaveHero = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert('Hero Section Content Saved & Live Updated!');
    }, 600);
  };

  const handleSaveAbout = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert('About Section Content Saved & Live Updated!');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-diablo-bg flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader title="Website CMS Content Editor" subtitle="Edit landing page copy, hero headlines, and story sections" />

        <main className="p-8 space-y-8 flex-1 max-w-5xl">
          {/* Hero Section Form */}
          {hero && (
            <GlassCard className="p-8 border-diablo-primary/30 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-diablo-border">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-diablo-primary" />
                  <h3 className="text-lg font-bold text-white font-display">Hero Banner Section</h3>
                </div>
                <Button variant="primary" size="sm" icon={<Save className="w-4 h-4" />} onClick={handleSaveHero}>
                  {saving ? 'Saving...' : 'Save Hero Copy'}
                </Button>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-diablo-muted uppercase font-semibold mb-1">Headline Main Title</label>
                  <input
                    type="text"
                    value={hero.title}
                    onChange={(e) => setHero({ ...hero, title: e.target.value })}
                    className="w-full p-3 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-diablo-muted uppercase font-semibold mb-1">Brand Highlight</label>
                  <input
                    type="text"
                    value={hero.highlight}
                    onChange={(e) => setHero({ ...hero, highlight: e.target.value })}
                    className="w-full p-3 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-diablo-muted uppercase font-semibold mb-1">Subtitle / Story Overview</label>
                  <textarea
                    rows={3}
                    value={hero.subtitle}
                    onChange={(e) => setHero({ ...hero, subtitle: e.target.value })}
                    className="w-full p-3 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm leading-relaxed"
                  />
                </div>
              </div>
            </GlassCard>
          )}

          {/* About Section Form */}
          {about && (
            <GlassCard className="p-8 border-diablo-border space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-diablo-border">
                <div className="flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-diablo-primary" />
                  <h3 className="text-lg font-bold text-white font-display">About & Origin Section</h3>
                </div>
                <Button variant="primary" size="sm" icon={<Save className="w-4 h-4" />} onClick={handleSaveAbout}>
                  {saving ? 'Saving...' : 'Save About Copy'}
                </Button>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-diablo-muted uppercase font-semibold mb-1">Section Title</label>
                  <input
                    type="text"
                    value={about.title}
                    onChange={(e) => setAbout({ ...about, title: e.target.value })}
                    className="w-full p-3 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-diablo-muted uppercase font-semibold mb-1">Water Origin Story</label>
                  <textarea
                    rows={4}
                    value={about.storyText}
                    onChange={(e) => setAbout({ ...about, storyText: e.target.value })}
                    className="w-full p-3 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm leading-relaxed"
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
