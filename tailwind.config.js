/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        lg: '1200px'
      },
      colors: {
        primaryBlue: '#002D74',
        primaryGray: '#B9B9B9',
        secondaryGray: '#F1F1F1',
        primaryTosca: '#50BFA5'
      }
    },
    fontFamily: {
      sans: ['"TT Commons"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      body: []
    }
  },
  plugins: []
}
