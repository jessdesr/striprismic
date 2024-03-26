/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tan: "#F9F7F3",
      },
      screens: {
        maxSm: { max: "767px" },
      },
      flex: {
        half: "50%",
      },
      fontFamily: {
        custom: ["DS Regular", "serif"],
      },
    },
  },
  plugins: [],
};
