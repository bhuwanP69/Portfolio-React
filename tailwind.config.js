/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      'main-color' :"rgb(22,25,39)",
      'text-color': '#576EE0',
      'grid-color': '#1D2135',
      'button-color': '#4156c4',
      'circle':'#212740',
      'footer':'#0E101B',
      'hover': '#6e7cc2'
    }
    },
  },
  plugins: [],
}