/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      spacing: {
        36: "36rem",
        41: "40rem", // Define your custom rem value here
      },
    },
  },
  plugins: [],
};
