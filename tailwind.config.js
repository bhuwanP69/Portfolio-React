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
      'text-color': '#576EE0'
    }
    },
  },
  plugins: [],
}