const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
<<<<<<< HEAD
  plugins: [],
=======
  plugins: [
    require('tailwindcss-animated')
  ],
>>>>>>> codespace-stunning-xylophone-j6vwgwpjqgphq9qv
});
