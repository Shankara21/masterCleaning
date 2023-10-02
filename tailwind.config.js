/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        cBlack: "#010101",
        cGray: "#999999",
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
      },
    },
  },
  plugins: [require("daisyui")],
};
