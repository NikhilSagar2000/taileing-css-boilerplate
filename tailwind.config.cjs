/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xs": "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#e5f5ff",
          100: "#b3e1ff",
          200: "#80ceff",
          300: "#4dbaff",
          400: "#1aa6ff",
          500: "#008de6",
          600: "#006db3",
          700: "#004e80",
          800: "#002f4d",
          900: "#00101a",
        },
        secondary: {
          50: "#f9edf2",
          100: "#eecad9",
          200: "#e3a7c0",
          300: "#d884a7",
          400: "#cd608e",
          500: "#c23d75",
          600: "#9f325f",
          700: "#7b274a",
          800: "#581c35",
          900: "#351120",
        },
        tertiary: {
          50: "#f3f1f3",
          100: "#dad5dc",
          200: "#c1bac5",
          300: "#a89eae",
          400: "#8f8296",
          500: "#75697d",
          600: "#5b5161",
          700: "#413a45",
          800: "#27232a",
          900: "#0d0c0e",
        },
      },
    },
  },
  plugins: [],
};
