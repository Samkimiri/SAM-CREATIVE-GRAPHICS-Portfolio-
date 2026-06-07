import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F24E1E",
        purple: "#5B2EFF",
        green: "#00B37E",
        amber: "#FFB624",
        charcoal: "#141217",
        ink: "#211D26",
        soft: "#FFF8F4",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(20, 18, 23, 0.12)",
        glow: "0 24px 70px rgba(91, 46, 255, 0.22)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
