import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        skybrand: "#2F9CEB",
        cobalt: "#0B5BD3",
        coral: "#F24E1E",
        rainbow: "#FFB624",
        aqua: "#14C7E8",
        lime: "#00B37E",
        charcoal: "#101217",
        ink: "#1F2937",
        soft: "#F4FAFF",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(16, 18, 23, 0.12)",
        glow: "0 24px 70px rgba(47, 156, 235, 0.22)",
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
