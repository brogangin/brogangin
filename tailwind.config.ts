// import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.emerald,
      secondary: colors.teal,
      "soccer-primary": colors.emerald,
      "soccer-secondary": colors.teal,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "8rem",
      },
    },
  },
  plugins: [],
};
export default config;
