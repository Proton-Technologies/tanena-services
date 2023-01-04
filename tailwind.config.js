/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#185E55",
        'background': "#F5F5F5",
        'lightblue': "#44B7D082"
      }
    },
  },
  plugins: [],
}
