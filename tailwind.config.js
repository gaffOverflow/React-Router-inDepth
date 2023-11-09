/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backGround: "#2c3453",
        orangeAccent: "#BF4025",
      },
      fontFamily: {
        regular: "Didact Gothic, sans-serif",
        STIX: "STIX Two Text, serif",
      },
    },
  },
  plugins: [],
};
