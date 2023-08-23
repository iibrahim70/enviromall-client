/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        one: "#026573",
        two: "#004E64",
        three: "#4D4376",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
