/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SFBlack: "SFBlack",
        SFMedium: "SFMedium",
        SFLight: "SFLight",
      },
      colors: {
        main: "#124475",
      },
    },
  },
  plugins: [],
};
