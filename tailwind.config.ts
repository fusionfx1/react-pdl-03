import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#B13BFF",
        "green-dark": "#B13BFF",
        "custom-blue": "#B13BFF",
        "custom-blue-light": "#C06BFF",
        "custom-blue-dark": "#9A22E0",
      },
    },
  },
  plugins: [],
};
export default config;