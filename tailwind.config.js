/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito'],
        'Anton' : ['Anton'],
        'Montserrat' : ['Montserrat'],
      },
      colors: {
        'txt-header': "#ededed",
        'dk-yellow': "8B8000",
        'bg-yellow': "#FFEC01",
        'bg-dark': "#212121",
        'bg-darker': "#191919",
        'bg-light': "#ffffff",
        'text-dark': "#212121",
        'text-light': "#f5f5f5",
      }
    },
  },
  plugins: [require('daisyui'),],
}