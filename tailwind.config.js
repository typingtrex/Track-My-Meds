/** @type {import('tailwindcss').Config} */
// Add the NativeWind plugin to your tailwind.config.js file
const nativewind = require('nativewind/tailwind/css');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  // nativewind added
  plugins: [nativewind()],
};
