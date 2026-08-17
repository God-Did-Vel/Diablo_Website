import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import { CartDrawer } from '../components/products/CartDrawer';
import { ChatWidget } from '../components/ui/ChatWidget';

export const metadata: Metadata = {
  title: 'DIABLO TABLE WATER | Ultra-Pure Subterranean Table Water',
  description: 'Diablo Table Water is sourced from natural volcanic aquifers and ultra-filtered through 7 micro-refinement stages for unmatched taste, hydration, and cellular clarity.',
  keywords: ['Diablo Water', 'Table Water', 'Ultra Pure Water', '7-Stage Filtration', 'Alkaline Water', 'Premium Bottled Water'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-diablo-bg text-diablo-text antialiased">
        <AuthProvider>
          <CartProvider>
            {children}
            <CartDrawer />
            <ChatWidget />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
