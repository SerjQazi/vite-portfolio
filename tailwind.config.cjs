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
        // iphone pro max
        'xs': '430px',   
        //  iphone small    
        'phoneHorizontal': { 'raw': '(min-height: 343px)' },
        // iophone Large
        'phoneHorizontalX': { 'raw': '(min-height: 344px)' },
        // ipad
        'ipadHorizontal': { 'raw': '(min-height: 698px)' },
        // phones and ipad
        // 'portrait': { 'raw': '(min-height: 699px)' },
        'portraitX': { 'raw': '(min-height: 699px) and (max-height: 826px)' },
        
        'portraitIpad': { 'raw': '(min-height: 827px) and (max-height: 1366px)' },

        'ipadXL': '1292px',
        '3xl': '1550px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}