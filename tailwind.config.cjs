/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
    },
    color: {
      "gray-900": "#121214",
      "gray-800": "#202024",
      "gray-400": "#7c7c8a",
      "gray-200": "#c4c4cc",
      "gray-100": "#e1e1e6",

      "cyan-500": "#81d8f7",
      "cyan-300": "#9BE1FB",

      "black-900": "#000000",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
