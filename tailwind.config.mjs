/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter Variable",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Inter Variable",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        // Surface tokens — used via bg-surface / text-surface-fg etc.
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          fg: "rgb(var(--surface-fg) / <alpha-value>)",
          muted: "rgb(var(--surface-muted) / <alpha-value>)",
          subtle: "rgb(var(--surface-subtle) / <alpha-value>)",
          border: "rgb(var(--surface-border) / <alpha-value>)",
          card: "rgb(var(--surface-card) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          fg: "rgb(var(--brand-fg) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "#f59e0b",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
      backgroundImage: {
        "hero-light":
          "radial-gradient(1200px 500px at 50% -10%, rgba(245,158,11,0.18), transparent 60%), radial-gradient(800px 400px at 90% 0%, rgba(99,102,241,0.10), transparent 60%)",
        "hero-dark":
          "radial-gradient(1200px 500px at 50% -10%, rgba(245,158,11,0.20), transparent 60%), radial-gradient(800px 400px at 90% 0%, rgba(99,102,241,0.18), transparent 60%)",
        "grid-light":
          "linear-gradient(to right, rgba(15,17,21,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,17,21,0.04) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(0 0 0 / 0.04), 0 4px 16px rgb(0 0 0 / 0.04)",
        "soft-lg":
          "0 1px 2px rgb(0 0 0 / 0.04), 0 16px 48px -16px rgb(0 0 0 / 0.16)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
