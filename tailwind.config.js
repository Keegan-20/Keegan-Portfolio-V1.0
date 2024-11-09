/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
        shimmerElegant: "shimmerElegant 2.5s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        shimmerElegant: {
          "0%": { transform: "translateX(-100%)", opacity: 0.3 },
          "50%": { transform: "translateX(100%)", opacity: 0.5 },
          "100%": { transform: "translateX(200%)", opacity: 0.3 },
        },
      },
    },
  },
  plugins: [],
};
