/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#DB6332",
        secondary: "#151E3F",
        white: "#F2F3D9",
        beige: "#F2F3D9",
      },
      fontFamily: {
        mons: ['var(--font-mons)'],
        kanit: ['var(--font-kanit)'],
      },
    },
  },
  plugins: [],
};
