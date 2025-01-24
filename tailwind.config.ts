/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceHigh: {
          "0%, 100%": {
            transform: "translateY(-100%)", // Pantulan lebih tinggi
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)", // Kembali ke posisi awal
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#0f0f0f",
        primary: "#0A0A0A",
        variatif: "#171717",
        variatif_secondary : "#161616",
      },
      animation: {
        "bounce-high": "bounceHigh 1s infinite", // Animasi custom
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
} satisfies Config;
