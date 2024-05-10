/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
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
