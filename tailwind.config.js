/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        royalblue: {
          100: "#396cf0",
          200: "rgba(57, 108, 240, 0.12)",
        },
        grey: "#727383",
        "main-black": "#1f384c",
        gray: {
          100: "#f9fdff",
          200: "#082431",
          300: "rgba(255, 255, 255, 0.9)",
          400: "rgba(0, 0, 0, 0.41)",
        },
        gainsboro: {
          100: "#dedede",
          200: "#dcdcdc",
          300: "#dbdbdb",
          400: "#d9d9d9",
        },
        silver: "#bdb8b8",
        whitesmoke: {
          100: "#f8f9fa",
          200: "#f5f5f5",
          300: "#f0f0f0",
          400: "#eee",
        },
        aliceblue: "#eaf1ff",
        darkslategray: {
          100: "#404b52",
          200: "#333",
        },
        black1: "#000",
        blueviolet: "#5932ea",
        coral: "#ff7452",
        lightsteelblue: "#a3a8c3",
        mediumaquamarine: "#3ebc9f",
        dodgerblue: "#658ffe",
        black: "#0e254f",
      },
      spacing: {},
      fontFamily: {
        px: "'Lexend Deca'",
        poppins: "Poppins",
      },
      borderRadius: {
        "11xl": "30px",
        "3xs": "10px",
        mini: "15px",
        "10xs": "3px",
        xl: "20px",
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.88rem",
      "7xl": "1.63rem",
      lg: "1.13rem",
      xs: "0.75rem",
      "2xs": "0.69rem",
      xl: "1.25rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("preline/plugin"), require("flowbite/plugin")],
};
