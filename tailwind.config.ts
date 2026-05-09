import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "#0b0b0d",
        card:     "#111115",
        elevated: "#17171c",
        border:   "rgba(255,255,255,0.08)",
        lime:     "#c8f135",
        "lime-dim": "rgba(200,241,53,0.12)",
        cream:    "#f0efe9",
        "cream-dark": "#e8e7e1",
        ink:      "#1a1a1a",
        "ink-mid": "#555555",
        "ink-dim": "#888888",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        serif:   ["Playfair Display", "serif"],
        body:    ["Inter", "sans-serif"],
        mono:    ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "7xl": ["4.5rem",  { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "8xl": ["6rem",    { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        "9xl": ["8rem",    { lineHeight: "1",    letterSpacing: "-0.05em" }],
      },
    },
  },
  plugins: [],
};
export default config;
