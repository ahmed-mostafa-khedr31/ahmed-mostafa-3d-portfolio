/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--c-primary) / <alpha-value>)",
        secondary: "rgb(var(--c-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--c-tertiary) / <alpha-value>)",
        "black-100": "rgb(var(--c-black-100) / <alpha-value>)",
        "black-200": "rgb(var(--c-black-200) / <alpha-value>)",
        "white-100": "rgb(var(--c-white-100) / <alpha-value>)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
