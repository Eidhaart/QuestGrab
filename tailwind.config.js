/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-gradient": "linear-gradient(90deg, #051421, #091C2B)",
      },
      width: {
        70: "70%", // Add 70% width
      },
      boxShadow: {
        glow: "0 0 15px 2px rgba(241, 199, 141, 1.0)",
        innerGlow: "inset 0 0 17px 4px rgba(236, 139, 82, 1.0)",
      },

      fontFamily: {
        draconis: ["Draconis", "sans-serif"], // Assuming 'sans-serif' as a fallback
      },

      fontWeight: {
        normal: 400,
        bold: 700,
      },

      translate: {
        "1/2": "50%", // Add 50% translate
      },
      colors: {
        "dark-blue": "#11273E",
        orange: "#EC8B52",
        pink: "#B2485B",
        cream: "#F1C78D",
        dark: "#1D1F21",
        darker: "#0b0c0e",
      },
    },
  },
  plugins: [],
};
