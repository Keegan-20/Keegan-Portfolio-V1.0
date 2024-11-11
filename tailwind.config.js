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
        bounceEffect: "bounceEffect 3s ease-in-out infinite",
        glow: "glow 1.8s ease-in-out infinite",
        wave: "wave 1.5s ease-in-out infinite",

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
        bounceEffect: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(147, 51, 234, 0.5)" }, 
          "50%": { boxShadow: "0 0 18px rgba(147, 51, 234, 1)" }, 
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(15deg)" },
          "40%": { transform: "rotate(-10deg)" },
          "60%": { transform: "rotate(15deg)" },
          "80%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(0deg)" },
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
