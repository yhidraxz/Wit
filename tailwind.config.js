import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scalePulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        scalePulse: "scalePulse 1.5s ease-in-out infinite",
      },
      colors: {
        "base-100": "#232323",
        primary: "#dbbb90",
        accent: "#f0f02d",
        "base-light-100": "#f4f2f1",
      },
      backgroundImage: {
        "silver-gradient":
          "linear-gradient(135deg, #f9f9f9 0%, #d9d9d9 15%, #a0a0a0 30%, #f9f9f9 50%, #8a8a8a 70%, #e6e6e6 85%, #b0b0b0 100%)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [daisyui],
};

//#1B0E18
