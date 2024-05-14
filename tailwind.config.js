/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1020px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },

      colors: {
        primary: "#641320",
        secondary: "#f1f1f1",
        // custom: {
        //   pr: "hsl(8, 67%, 95%)",
        // },
      },
      width: {
        500: "500px",
      },
      height: {
        500: "500px",
      },
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
