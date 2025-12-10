/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        slate: {
          850: '#1e293b', // Custom dark shade for better contrast
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}