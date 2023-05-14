// React Native with Tailwind => ReactWind guide
// https://www.nativewind.dev/guides/cli-native#add-nativewind-to-your-postcss-config

module.exports = {
  plugins: [require('tailwindcss'), require('nativewind/postcss')],
};
