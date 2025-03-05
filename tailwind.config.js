/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8accff',
          400: '#54b0ff',
          500: '#2d8fff',
          600: '#1670e0',
          700: '#1358c4',
          800: '#154a9c',
          900: '#173f7a',
          950: '#0f2851',
          DEFAULT: '#1358c4'
        },
        // Accent Colors
        accent: {
          50: '#f0f7ff',
          100: '#e0eeff',
          200: '#baddff',
          300: '#7dc2ff',
          400: '#3aa1ff',
          500: '#0b7fff',
          600: '#005ff2',
          700: '#004ad1',
          800: '#003eab',
          900: '#00368a',
          950: '#002155',
          DEFAULT: '#005ff2'
        },
        // Dark Theme Colors
        dark: {
          50: '#f6f8fc',
          100: '#edf0f7',
          200: '#d8dfe9',
          300: '#b6c4d7',
          400: '#8fa3c0',
          500: '#7185aa',
          600: '#5a6c91',
          700: '#4a5876',
          800: '#404b63',
          900: '#384154',
          950: '#252b39',
          DEFAULT: '#252b39'
        }
      }
    },
  },
  plugins: [],
};