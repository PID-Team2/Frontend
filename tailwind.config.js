/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          850: '#282929'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

