/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ['Montserrat', 'sans-serif']
      },
      colors: {
        'Snow': '#FBF9F6',
        'Ruby': '#A41623',
        'OuterSpace': '#2C363F',
        'Timberwolf': '#DFDAD2',
        'Shadow': '#86775F',
      }
    },
  },
  plugins: [],
}