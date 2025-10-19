/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A1A",
        terracotta: "#E27D60",
        sunyellow: "#F9D45C",
        offwhite: "#FAF8F3",
        beige: "#EDEAE4",
        softgray: "#D8D5CE"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
}
