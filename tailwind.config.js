/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tan: "#E5E2D9",
        primaryText: "#2E3331",
      },
      screens: {
        maxSm: { max: "767px" },
      },
      flex: {
        half: "50%",
      },
      fontFamily: {
        custom: ["DS Regular", "serif"],
        sans: ['var(--font-didact-gothic)']
      },
    },
  },
  plugins: [],
};
