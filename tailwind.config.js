/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

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
        color_primary: colors.blue[500],
        text_default: colors.slate[800],
        text_secondary: colors.slate[600],
        text_muted: colors.gray[300],
        border_primary: colors.gray[400],
        bg_input: colors.blue[100],
        bg_primary: colors.blue[500],
        bg_hover: colors.blue[700],
        bg_secondary: colors.blue[400],
        bg_muted: colors.blue[100],
        bg_body: colors.sky[100],
        bg_form: colors.slate[200],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    fontSize: {
      base: "1.25rem",
      sm: "0.875rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("preline/plugin"), require("flowbite/plugin")],
};
