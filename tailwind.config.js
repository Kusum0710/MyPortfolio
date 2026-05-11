/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0ff',
        'secondary': '#6366f1',
        'dark': '#0a0a0a',
        'card': '#1a1a2e',
        'border': '#2d2d44',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, rgba(15, 255, 255, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(15, 255, 255, 0.2)',
        'glow-sm': '0 0 10px rgba(15, 255, 255, 0.1)',
        'premium': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(15, 255, 255, 0.2)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(15, 255, 255, 0.4)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};
