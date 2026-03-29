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
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#7c3aed",
          "purple-light": "#8b5cf6",
          "purple-bright": "#a855f7",
          violet: "#6d28d9",
          pink: "#ec4899",
          "pink-light": "#f472b6",
          blue: "#38bdf8",
          "blue-light": "#60a5fa",
        },
        dark: {
          bg: "#050008",
          "bg-2": "#0a000f",
          "bg-3": "#0d0015",
          card: "rgba(255,255,255,0.04)",
          border: "rgba(255,255,255,0.08)",
          "border-purple": "rgba(139,92,246,0.3)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(135deg, #050008 0%, #0d0015 50%, #050008 100%)",
        "gradient-purple-pink": "linear-gradient(135deg, #7c3aed, #ec4899)",
        "gradient-purple-blue": "linear-gradient(135deg, #6d28d9, #38bdf8)",
        "gradient-text": "linear-gradient(90deg, #a855f7, #f472b6, #60a5fa)",
      },
      animation: {
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marqueeReverse 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(124,58,237,0.4), 0 0 80px rgba(124,58,237,0.2)",
        "glow-pink": "0 0 40px rgba(236,72,153,0.3), 0 0 80px rgba(236,72,153,0.15)",
        "glow-blue": "0 0 40px rgba(56,189,248,0.3), 0 0 80px rgba(56,189,248,0.15)",
        "card-hover": "0 20px 60px rgba(124,58,237,0.2), 0 0 0 1px rgba(139,92,246,0.3)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
