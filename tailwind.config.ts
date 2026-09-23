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
        display: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        sand: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
        },
        clay: {
          50: "#ECFDF3",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#4CC76A",
          500: "#43A85A",
          600: "#36914B",
          700: "#28733A",
        },
        moss: {
          50: "#ECFDF3",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#86D99A",
          400: "#5FC878",
          500: "#43A85A",
          600: "#36914B",
          700: "#28733A",
          800: "#1F5B2D",
          900: "#174523",
        },
        ink: {
          400: "#8A8A8A",
          500: "#64748B",
          700: "#334155",
          900: "#1E293B",
        },
      },
      boxShadow: {
        glow: "0 8px 24px -12px rgba(67, 168, 90, 0.32)",
        card: "0 8px 24px -18px rgba(30, 41, 59, 0.12)",
        "card-hover": "0 12px 28px -18px rgba(67, 168, 90, 0.18)",
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
