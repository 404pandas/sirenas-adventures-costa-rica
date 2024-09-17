const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#056cf2",
        tan: "#ffdec3",
        brown: "#bb7a28",
        "light-blue": "#05dbf2",
        orange: "#f28705",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
