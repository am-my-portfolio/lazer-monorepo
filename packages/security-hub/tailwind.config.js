const { createThemes } = require('tw-colors');
// const esmRequire = require('esm')(module);
const twColors = require('tailwindcss/colors');
const twForms = require('@tailwindcss/forms')({
  strategy: 'class',
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        bruno: ['Bruno Ace'], // https://fonts.google.com/specimen/Bruno+Ace
        jersey: ['Jersey 10 Charted', 'sans-serif'], // doesnt work
        audiowide: ['Audiowide', 'sans-serif'], // https://fonts.google.com/specimen/Audiowide?classification=Display&stroke=Sans+Serif
        orbitron: ['Orbitron'], // https://fonts.google.com/specimen/Orbitron?classification=Display&stroke=Sans+Serif
      },
    },
  },
  plugins: [
    // vfSlider,
    twForms,
    // https://palettes.shecodes.io/
    createThemes(
      {
        light: {
          primary: twColors.neutral['100'],
          secondary: twColors.zinc['500'],
          'pop-primary': twColors.rose['700'],
          'pop-secondary': twColors.teal['700'],
        },
        dark: {
          primary: twColors.neutral['800'],
          secondary: twColors.zinc['500'],
          'pop-primary': twColors.orange['700'],
          'pop-secondary': twColors.teal['300'],
        },
      },
      { defaultTheme: 'light' },
    ),
  ],
  variants: {
    width: ['responsive', 'hover', 'focus', 'active'],
    border: ['hover'],
    extend: {
      textColor: ['active'],
    },
  },
};
