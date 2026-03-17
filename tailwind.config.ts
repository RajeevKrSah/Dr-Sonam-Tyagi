import type { Config } from "tailwindcss";

export default {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B3A5B",
        primaryLight: "#1C5C8C",
        buttonBlue: "#5FA8E8",
      },
    },
  },
  plugins: [],
} satisfies Config;
