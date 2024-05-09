/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {},
    extend: {
      colors: {
        "error-color": "#c34c4c",
        "font-color": "#1f1f1f",
        "font-color-light": "#5e5e5e",
        "primary-color": '#2ba791',
        "primary-color-light": '#5ec8b9',
        "primary-color-background": '#e5f9f682',
        "neuter-color": "#a4a4a4",
        "masculin-color": "#4c8ac3",
        "feminine-color": "#c34c4c",
      },
      fontSize: {
        sm: "0.75rem",
        base: "0.875rem",
        lg: "1.065rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
  },
  plugins: [],
};
