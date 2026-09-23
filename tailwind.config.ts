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
          50: "#F5F0E8",
          100: "#EEE7DA",
          200: "#E4D9C4",
          300: "#D6C7AC",
        },
        clay: {
          50: "#F8F0E9",
          100: "#F2E4D8",
          200: "#E8C7B2",
          300: "#DBA987",
          400: "#C98A66",
          500: "#B36744",
          600: "#8F5236",
          700: "#6F4130",
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
          400: "#9A8B76",
          500: "#7D6E5C",
          700: "#55483A",
          900: "#3A3128",
        },
      },
      boxShadow: {
        glow: "0 6px 24px -8px rgba(179, 103, 68, 0.35)",
        card: "0 14px 30px -18px rgba(120, 95, 65, 0.22)",
        "card-hover": "0 24px 48px -20px rgba(179, 103, 68, 0.24)",
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
