import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  'rgb(var(--forest-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--forest-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--forest-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--forest-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--forest-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--forest-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--forest-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--forest-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--forest-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--forest-900-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ["'Lora'", "serif"],
        body:    ["'Nunito'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "fade-in":  "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "grow":     "grow 0.6s ease-out",
      },
      keyframes: {
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(16px)" } },
        grow:    { "0%": { transform: "scaleX(0)" }, "100%": { transform: "scaleX(1)" } },
      },
    },
  },
  plugins: [],
};
export default config;
