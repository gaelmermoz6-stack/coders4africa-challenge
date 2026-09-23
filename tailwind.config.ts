import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      colors: {
        sand: {
          50: "#F3F0E8",
          100: "#E8E4DA",
          200: "#D9D4C8",
          300: "#C6C0B2",
        },
        clay: {
          50: "#FFF0E9",
          100: "#FFDCCB",
          200: "#FFB999",
          300: "#FF9368",
          400: "#F87543",
          500: "#F25B2A",
          600: "#D9471B",
          700: "#A93617",
        },
        moss: {
          50: "#EFF3EE",
          100: "#E0E9E0",
          200: "#C2D4C7",
          300: "#97B29E",
          400: "#6E9A7C",
          500: "#4F7F5E",
          600: "#3D6249",
          700: "#334E3B",
          800: "#283D2E",
          900: "#1E2F24",
        },
        ink: {
          400: "#8E8B82",
          500: "#5F5D56",
          700: "#2E2E2B",
          900: "#141414",
        },
      },
      boxShadow: {
        glow: "0 8px 24px -8px rgba(242, 91, 42, 0.45)",
        card: "0 14px 30px -18px rgba(20, 20, 20, 0.2)",
        "card-hover": "0 24px 48px -20px rgba(20, 20, 20, 0.25)",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 2.6s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
