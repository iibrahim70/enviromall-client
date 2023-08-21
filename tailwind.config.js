/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        one: "#569DAA",
        two: "#54BAB9",
        three: "",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
