import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#0f0f0f",
        primary: "#0A0A0A",
        variatif: "#171717",
        variatif_secondary : "#161616",
      },
      fontFamily: {

      }
    },
  },
  plugins: [],
} satisfies Config;
