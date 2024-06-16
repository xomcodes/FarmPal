import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
        },
        secondary: {
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
        },

        tetiary: {
          100: "var(--tetiary-100)",
        },
      },
      boxShadow: {
        sm: "0px 8px 40px 0px #C4C4C433",
      },
    },
  },
  plugins: [],
};
export default config;
