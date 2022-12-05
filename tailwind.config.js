/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#017AFF',
      'purple': '#7A28CB',
      ' green': '#39FF14',
      'gray-dark': '#39393A',
      'gray-light': '#E6E6E6',
    },
    extend: {},
  },
  plugins: [],
}
