/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "blue-border": "0 0 10px rgba(0, 0, 255, 0.5)", // Adjust the shadow as needed
      },//login page
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
      },
      animation: {
        shake: "shake 0.5s",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'], // Ensure hover variants are enabled for boxShadow login page
      borderColor: ['focus'], // Enable focus variants for borderColor login page
    },
  },
  plugins: [],
};
