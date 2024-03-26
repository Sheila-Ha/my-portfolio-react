/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {},
  },
  /* day 1   @ 1:54min */
  plugins: [require('@tailwindcss/typography')],
};


