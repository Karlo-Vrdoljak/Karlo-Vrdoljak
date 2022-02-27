module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00CBA9",
          50: "#84FFEA",
          100: "#6FFFE7",
          200: "#46FFE0",
          300: "#1EFFD9",
          400: "#00F4CB",
          500: "#00CBA9",
          600: "#00937A",
          700: "#005B4C",
          800: "#00231D",
          900: "#000000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
