/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme1: {
          100: "#ede8f5",
          200: "#adbbda",
          300: "#8697c4",
          400: "#7091e6",
          500: "#3d52a0",
          600: "#263a83"
        }
      },
    },
  },
  plugins: [],
}