/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      serif: ["Young Serif", "serif"],
    },
    extend: {
      colors: {
        WengeBrown: "#5F564D",
        dark: "#7A284E",
        BrandyRed: "#854632",
      },
      backgroundColor: {
        main_pink: "#f3e5d7",
        snow: "#FFF7FB",
      },
    },
  },
  plugins: [],
};
