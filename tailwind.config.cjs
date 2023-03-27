/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu, sans-serif'],
        cursive: ['Train One, cursive'],
      },
      screens: {
        'xs': '430px',        
        'phoneHorizontal': { 'raw': '(min-height: 343px)' },
        'phoneHorizontalX': { 'raw': '(min-height: 344px)' },
        'ipadHorizontal': { 'raw': '(min-height: 698px)' },
        'portrait': { 'raw': '(min-height: 699px)' },
        'ipadXL': '1292px',
        '3xl': '1550px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}