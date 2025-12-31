/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3e160e',
        accent: '#e96029',
        secondary: '#5067d4',
        backgroundLight: '#f7e9c6',
        backgroundDark: '#1f1513',
        surfaceLight: 'rgba(255, 255, 255, 0.6)',
        surfaceDark: 'rgba(62, 22, 14, 0.6)',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -4px rgba(62, 22, 14, 0.08)',
        glow: '0 4px 25px -4px rgba(233, 96, 41, 0.3)',
        card: '0 2px 10px rgba(62, 22, 14, 0.03)',
      },
    },
  },
  plugins: [],
}
