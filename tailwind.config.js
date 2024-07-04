/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      textColor: {
        "darker-purple": "var(--DARKER-PURPLE)",
        "dark-purple": "var(--DARK-PURPLE)",
        "base-purple": "var(--BASE-PURPLE)",
        "light-purple": "var(--LIGHT-PURPLE)",
        "lighter-purple": "var(--LIGHTER-PURPLE)",
      }
    },
  },
  plugins: [],
};
