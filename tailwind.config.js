/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background : "#F7F6F4",
        primary: "#F9E6D0",
        secondary: "#373737"
      },
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
