/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        diablo: {
          bg: '#FFFFFF', // changed to white
          skyBg: '#F4F5F8', // light gray for sections
          surface: '#F9F9F9',
          card: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.1)',
          primary: '#0F75BC', // aguapure blue
          secondary: '#198CE2',
          accent: '#00D2FF',
          cyanGlow: 'rgba(15, 117, 188, 0.4)',
          text: '#444444', // dark gray text
          heading: '#1A2346', // dark blue/black for headings
          muted: '#888888',
        },
      },
      fontFamily: {
        sans: ['Be Vietnam', 'Be Vietnam Pro', 'sans-serif'],
        display: ['Laila', 'Outfit', 'serif'],
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(15, 117, 188, 0.3)',
        'glow-lg': '0 0 50px -10px rgba(15, 117, 188, 0.4)',
        glass: '0 10px 40px 0 rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%)',
        'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(249, 249, 249, 1) 100%)',
        'water-wave': 'linear-gradient(180deg, rgba(15, 117, 188, 0.05) 0%, rgba(15, 117, 188, 0.1) 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'ripple': 'ripple 4s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
