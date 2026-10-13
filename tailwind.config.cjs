/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'nav': '840px',
      },
      colors: {
        canvas: "#f6f8fc",
        surface: "#ffffff",
        ink: "#1f2937",
        inkMuted: "#64748b",
        accent: "#b08a33",
        accentSoft: "#d4b878",
        accentLight: "#f4e7c7",
        night: "#0f172a",
        iris: "#b08a33",
        mint: "#d4b878",
        amber: "#f4e7c7"
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "gradient-orbit":
          "radial-gradient(circle at 20% 20%, rgba(240,210,150,0.35), transparent 55%), radial-gradient(circle at 80% 15%, rgba(219,184,112,0.3), transparent 55%), radial-gradient(circle at 50% 75%, rgba(247,232,200,0.45), transparent 65%)"
      },
      boxShadow: {
        glass: "0 20px 50px rgba(15, 29, 52, 0.12)",
        glow: "0 0 40px rgba(96,165,250,0.35)"
      }
    }
  },
  plugins: []
};
