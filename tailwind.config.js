/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#0f172a',
        surface: '#1e293b',
        primary: '#facc15', // Yellow
        accent: '#38bdf8',  // Sky Blue
        text: '#e2e8f0',
        muted: '#94a3b8',
      },
    },
  },
  plugins: [],
}
