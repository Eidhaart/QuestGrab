/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        70: "70%", // Add 70% width
      },
      translate: {
        "1/2": "50%", // Add 50% translate
      },
      colors: {
        "dark-blue": "#11273E",
        orange: "#EC8B52",
        pink: "#B2485B",
        cream: "#FEFAD3",
      },
    },
  },
  plugins: [],
};
