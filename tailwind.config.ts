import type { Config } from "tailwindcss";
import * as colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        't-black': '#000000',
        't-dark-gray': '#141414',
        't-medium-gray': '#282828',
        't-purple': '#320064',
        't-dark-purple': '#230046',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: ['selector', '[data-mode="dark"]'],
  plugins: [],
};
export default config;
