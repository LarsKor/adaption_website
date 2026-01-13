/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9fb',
          100: '#dff3f6',
          500: '#06b6d4',
          700: '#0b8790'
        }
      }
    }
  },
  plugins: []
}
