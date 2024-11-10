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
        gradient: "gradient 3s ease infinite",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        shimmerElegant: {
          "0%": { transform: "translateX(-100%)", opacity: 0.3 },
          "50%": { transform: "translateX(100%)", opacity: 0.5 },
          "100%": { transform: "translateX(200%)", opacity: 0.3 },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },

      backgroundSize: {
        "400%":"400% 400%",
      },

      fontFamily: {
        zodiak: ['Zodiak', 'serif'],
        satoshi: ['Satoshi', 'serif']
      },
    },
  },
  plugins: [],
};
