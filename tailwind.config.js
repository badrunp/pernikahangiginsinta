const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        osans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        gv: ["Great Vibes", ...defaultTheme.fontFamily.sans],
        mw: ["Merriweather", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
