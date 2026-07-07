import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "var(--page)",
        surface: "var(--surface)",
        elevated: "var(--elevated)",
        hair: "var(--hair)",
        "hair-strong": "var(--hair-strong)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        subtle: "var(--text-muted)",
        clay: "var(--clay)",
        "clay-hover": "var(--clay-hover)",
        "clay-ink": "var(--clay-ink)",
        live: "var(--live)",
        built: "var(--built)",
        wip: "var(--wip)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        container: "1120px",
        prose: "680px",
      },
      borderRadius: {
        card: "16px",
        control: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
