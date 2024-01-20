/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hunterGreen: '#31572C',
        tyrianPurple: '#4C0827'
      },
      fontFamily: {
        cool: ['Montserrat']
      }
    },
  },
  plugins: [],
}

