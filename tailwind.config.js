/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /* New Premium System */
          primary: "#1F1F1F",   // Deep charcoal
          accent: "#C6A75E",    // Elegant gold
          soft: "#F8F6F2",      // Warm off white
          muted: "#6B6B6B",     // Soft gray
          rose: "#B76E79",      // Premium rose tone

          /* Legacy Compatibility (optional but safe) */
          black: "#111111",
          gold: "#C8A951",
          light: "#F7F7F7",
          text: "#555555",
        },
      },

      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },

      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};