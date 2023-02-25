/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        'flip-horizontal': {
          '--transform-scale-x': '-1',
        },
      }
    },
  },
  plugins: [],
}