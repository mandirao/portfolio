import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        // Single accent color — used with conviction, not decoration
        terracotta: {
          50: "#fdf4ef",
          100: "#f8e4d0",
          200: "#f1c8a2",
          300: "#e8a56e",
          400: "#dc7d43",
          500: "#cb6d51", // primary accent
          600: "#a8502d",
          700: "#8a3e22",
          800: "#6e301a",
          900: "#572614",
        },
      },
    },
  },
  plugins: [],
};

export default config;
