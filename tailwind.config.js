/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        purplerain: {
          light: "#A187BE",
          dark: "#4B4453",
          ultra: "#4B3F58",
        },
        violet: {
          light: "#FDF7FF",
          dark: "#9B89B3",
        },
        greywolf: {
          light: "#D9D9D9"
        }
      },
    },
  },
  plugins: [],
};
