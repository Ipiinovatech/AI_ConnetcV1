/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF5FC',
          100: '#DCEAF9',
          200: '#B9D6F3',
          300: '#96C1ED',
          400: '#73ACE7',
          500: '#0066CC',
          600: '#0052A3',
          700: '#003D7A',
          800: '#002952',
          900: '#001429',
          950: '#000A14',
          DEFAULT: '#0066CC'
        },
        secondary: {
          50: '#E6F1FF',
          100: '#CCE4FF',
          200: '#99C8FF',
          300: '#66ADFF',
          400: '#3391FF',
          500: '#0076FF',
          600: '#005ECC',
          700: '#004799',
          800: '#002F66',
          900: '#001833',
          950: '#000C1A',
          DEFAULT: '#0076FF'
        },
        dark: {
          50: '#E6EDF5',
          100: '#CCDAEB',
          200: '#99B5D6',
          300: '#6690C2',
          400: '#336BAD',
          500: '#004699',
          600: '#00387A',
          700: '#002A5C',
          800: '#001C3D',
          900: '#000E1F',
          950: '#00070F',
          DEFAULT: '#004699'
        }
      }
    },
  },
  plugins: [],
};