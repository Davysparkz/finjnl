/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
	  "./src/**/*.{js, jsx, ts, tsx}", 
  	  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    fontFamily: {
      'app-segoe': ['"Segoe UI"',],
      sans: [
        '"Segoe UI"',
        'sans-serif',
        ...fontFamily.sans,
      ]
    },
    extend: {
      colors: {
        'primary': {
          light: '#9590DE4D',  
          DEFAULT: '#9590DE',
          dark: '#9590DEFF',
        },
      },
    },
  },
  plugins: [],
}
