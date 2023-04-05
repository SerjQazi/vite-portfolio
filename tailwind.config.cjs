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
        'xs': '412px',
        'sm': '640px',
        'phone': '733px',
        'md': '768px',
        'smallTab': '834px',
        'lg': '1024px',
        'xl': '1280px',
        'ipad': '1366px',
        '2xl': '1536px',
        '3xl': '1600px'
      },
    },
  },
  plugins: [],
}