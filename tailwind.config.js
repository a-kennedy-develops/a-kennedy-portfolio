/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        electric: {
          blue: "#21248d",
          yellow: "#FEE36E",
        },
        faded: {
          blue: {
            light: "#6c6fdd",
            heavy: "#6467db",
          },
        },
      },
    },
  },
  plugins: [],
};
