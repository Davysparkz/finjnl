/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	  "./src/**/*.{js, jsx, ts, tsx}", 
  	  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    fontFamily: {
      'app-segoe': ['"Segoe UI"',],
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
