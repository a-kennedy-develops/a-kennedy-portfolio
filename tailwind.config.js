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
      fontSize: {
        landingClamp: "clamp(2.5rem, 7vw, 4.5rem)",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        slideDown: "slideDown 0.4s ease-in-out",
        fadeOut: "fadeOut 0.4s ease-in-out forwards",
      },
      fill: (theme) => ({ ...theme("colors") }),
      stroke: (theme) => ({ ...theme("colors") }),
    },
  },
  variants: {
    extend: {
      fill: ["hover"],
      stroke: ["hover"],
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      const components = {
        ".after-line": {
          "&::after": {
            content: '""',
            display: "block",
            width: "1px",
            height: "90px",
            margin: "0px auto",
            backgroundColor: theme("colors.slate.400"),
          },
        },
      };
      addComponents(components);
    },
  ],
};
