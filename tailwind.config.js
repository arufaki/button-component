/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      noto: ["Noto Sans JP", "sans-serif"],
      ubuntu: ["Ubuntu Mono", "monospace"],
    },
    extend: {
      colors: {
        vampireGrey: "#4F4F4F",
        shipGrey: "#3F3F3F",
        platinum: "#E0E0E0",
        aluminium: "#AEAEAE",
        royalBlue: "#3D5AFE",
        darkGrey: "#455A64",
        veryDark: "#1C313A",
      },
      boxShadow: {
        "3xl": "0px 2px 3px 0px rgba(51, 51, 51, 0.20)",
      },
    },
  },
  plugins: [],
};
