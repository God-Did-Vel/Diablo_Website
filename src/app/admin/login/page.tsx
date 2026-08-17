'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Droplet, Lock, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { Button } from '../../../components/ui/Button';

export default function AdminLoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('admin@diablowater.com');
  const [password, setPassword] = useState('admin123456');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const success = await login(email, password);
    if (success) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid admin credentials. Please check email and password.');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-hero-gradient flex items-center justify-center p-4 relative">
      <div className="max-w-md w-full glass-card p-8 rounded-3xl border border-diablo-primary/40 shadow-glow-lg relative z-10 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-diablo-secondary to-diablo-primary p-0.5 shadow-glow">
              <div className="w-full h-full bg-diablo-bg rounded-full flex items-center justify-center">
                <Droplet className="w-7 h-7 text-diablo-primary animate-pulse" />
              </div>
            </div>
          </Link>
          <h1 className="text-2xl font-black text-white font-display">DIABLO ADMIN PORTAL</h1>
          <p className="text-xs text-diablo-muted">Secure CMS management & content editor</p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold text-center">
            {error}
          </div>
        )}

        {/* Demo Credentials Box */}
        <div className="p-3.5 rounded-xl bg-diablo-surface/80 border border-diablo-border text-xs space-y-1">
          <span className="text-diablo-primary font-bold block">🔑 Pre-configured Admin Credentials:</span>
          <div className="text-diablo-muted">Email: <span className="text-white font-mono">admin@diablowater.com</span></div>
          <div className="text-diablo-muted">Password: <span className="text-white font-mono">admin123456</span></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-diablo-muted uppercase mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-diablo-muted absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-diablo-surface border border-diablo-border text-sm text-white focus:outline-none focus:border-diablo-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-diablo-muted uppercase mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-diablo-muted absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-diablo-surface border border-diablo-border text-sm text-white focus:outline-none focus:border-diablo-primary"
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={loading}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {loading ? 'Authenticating...' : 'Sign In to Admin Dashboard'}
          </Button>
        </form>

        <div className="text-center pt-2">
          <Link href="/" className="text-xs text-diablo-muted hover:text-diablo-primary transition-colors">
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </main>
  );
}
