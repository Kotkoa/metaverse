/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
        blantic: "'Blantic'"
      },
      letterSpacing: {
        widester: '0.2em',
        widestmore: '0.5em'
      },
      flex: {
        2: '1 0 20%'
      }
    }
  },
  plugins: []
}
