/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      primary: {
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
      },
      orange: {
        100: 'var(--color-orange-100)',
        200: 'var(--color-orange-200)',
      },
      green: {
        100: 'var(--color-green-100)',
        200: 'var(--color-green-200)',
      },
      pink: {
        100: 'var(--color-pink-100)',
        200: 'var(--color-pink-200)',
      },
      slate: {
        100: 'var(--color-slate-100)',
        200: 'var(--color-slate-200)',
        300: 'var(--color-slate-300)',
      },
      gray: {
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
      },
    },
    boxShadow: {
      DEFAULT: '0px -6px 20px rgba(13, 10, 25, 0.08)',
      sm: '0px -15px 20px rgba(13, 10, 25, 0.06)',
      md: '0px 3px 4px #DBDCDF',
      lg: '0px 8px 12px #DBDCDF',
      xl: '0px 12px 14px rgba(153, 155, 168, 0.18)',
      '2xl': '0px 16px 18px rgba(153, 155, 168, 0.18)',
      '3xl': '0px 20px 24px rgba(153, 155, 168, 0.18)',
    },
  },
  plugins: [],
};
