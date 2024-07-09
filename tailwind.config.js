/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#F3C060",
      secondary: "#256CFF",
      dark: "#1A1A1A",
      white: "#FFFFFF",
      green: "#4BB543",
      red: "#F07D64",
      yellow: "#FFCC00",
    },
  },
  plugins: [],
};
