/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#0f9ee4",
        third: "#0e487e",
        background: "#fff",
      },
      flex: {
        0.25: 0.25, // Esto establece flex: 0.25
        2: 2
      },
    },
  },
  plugins: [],
};
