import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      "bg-primary": "rgb(var(--bg-primary) / <alpha-value>)",
      "bg-secondary": "rgb(var(--bg-secondary) / <alpha-value>)",
      surface: "rgb(var(--surface) / <alpha-value>)",
      accent: "rgb(var(--accent) / <alpha-value>)",
      "accent-hover": "rgb(var(--accent-hover) / <alpha-value>)",
      "text-primary": "rgb(var(--text-primary) / <alpha-value>)",
      "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
      divider: "rgb(var(--divider) / <alpha-value>)",
    },
    boxShadow: {
      soft: "0 20px 45px rgb(var(--accent) / 0.18)",
      lift: "0 16px 30px rgb(var(--accent) / 0.28)",
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.22, 1, 0.36, 1)",
      smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
    fontFamily: {
      sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      heading: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};

export default config;
