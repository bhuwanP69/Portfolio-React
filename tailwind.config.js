/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      'text-color': '#e98074',
      'grid-color': '#d8c3a5',
      'button-color': '#e85a4f',
      'circle':'#212740',
      'footer':'#d8c3a5',
      'hover': '#6e7cc2',
      'formBg':'#0e1e25',
      'body':'#eae7dc'
    }
    },
  },
  plugins: [],
}