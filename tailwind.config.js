/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primaryColor": "#ba6139",
        "secundaryColor": "#123a3e",
        "textColor": "#f1d4af",
      },
      backgroundColor: {
        "primaryColor": "#ba6139",
        "secundaryColor": "#123a3e",
        "textColor": "#f1d4af",
        "hoverPrimaryColor": "#964e2d",
        "hoverSecundaryColor": "#0b2629",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
