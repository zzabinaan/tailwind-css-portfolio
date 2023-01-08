/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#524F62",
        background: "#fafafa",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      fontSize: {
        xs: "0.4rem",
        sm: "0.65rem",
        base: "0.8rem",
        lg: "1rem",
        xl: "1.3rem",
        "2xl": "1.65rem",
        "custom":"0.7rem"
      },
    },
  },
  plugins: [],
};
