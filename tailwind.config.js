/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: '#171721',
      white: '#FEFEFF',
      primary: {
        100: '#ECF2FF',
        200: '#3E7EFF',
        300: '#2F5FBF',
      },
      orange: {
        100: '#FDECE5',
        200: '#EF8354',
      },
      green: {
        100: '#EFFBF7',
        200: '#5FDCB3',
      },
      pink: {
        100: '#FEEFF2',
        200: '#FBB0BF',
      },
      slate: {
        100: '#8083A3',
        200: '#292C43',
        300: '#212437',
      },
      gray: {
        100: '#FCFCFD',
        200: '#FBFBFF',
        300: '#F8F8FC',
        400: '#F5F5FA',
        500: '#EFF0F1',
        600: '#ECEEEF',
        700: '#E4E6E8',
        800: '#515158',
      },
    },
  },
  plugins: [],
};
