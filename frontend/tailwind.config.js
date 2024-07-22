/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgc: '#EEEEEE',
        pri: '#615EFC',
        sec: "#7E8EF1",
        accent: "#D1D8C5"
      }
    },
  },
  plugins: [],
}