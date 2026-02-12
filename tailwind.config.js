/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tcrufc-red': 'rgb(200, 16, 46)',
        'tcrufc-blue': 'rgb(0, 51, 160)',
        'tcrufc-gold': 'rgb(255, 205, 0)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
