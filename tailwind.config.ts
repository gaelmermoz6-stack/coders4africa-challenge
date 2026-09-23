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
          50: "#111111",
          100: "#181818",
          200: "#242424",
          300: "#333333",
        },
        clay: {
          50: "#FFF0E6",
          100: "#FFE0CC",
          200: "#FFBF99",
          300: "#FF9B66",
          400: "#FF8133",
          500: "#FF6A00",
          600: "#E85D00",
          700: "#B94700",
        },
        moss: {
          50: "#F5F5F3",
          100: "#E8E8E8",
          200: "#D6D6D6",
          300: "#BDBDBD",
          400: "#8A8A8A",
          500: "#666666",
          600: "#444444",
          700: "#2E2E2E",
          800: "#202020",
          900: "#111111",
        },
        ink: {
          400: "#8A8A8A",
          500: "#A3A3A3",
          700: "#D1D1D1",
          900: "#F5F5F3",
        },
      },
      boxShadow: {
        glow: "0 8px 24px -12px rgba(17, 17, 17, 0.25)",
        card: "0 8px 24px -18px rgba(17, 17, 17, 0.16)",
        "card-hover": "0 12px 28px -18px rgba(17, 17, 17, 0.22)",
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
