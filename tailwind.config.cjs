/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#38aecc',
        primary: '#022f40',
        secondary: '#0090c1',
        hover: '#046e8f'
      },
    },
  },
  plugins: [],
};
