/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
        xs: '480px',
        ...defaultTheme.screens
    },
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}