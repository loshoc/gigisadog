/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     extend: {
      fontFamily: {
      'SmileySans':['SmileySans', 'sans-serif'],
    },
    spacing: {
      'card-l': '48rem',
    },
  },

   },
   plugins: [],
  };
