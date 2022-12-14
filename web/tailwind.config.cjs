/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        fdBG: 'url("/img/fd__bg.png")',
        'fd-gradient': 'linear-gradient(90deg, #1e3a8a 10%, #be185d 50.52%, #f59e0b 90%)',
        'fd-gradient-grid': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .9) 67%)',
      }
    },
  },
  plugins: [],
}
