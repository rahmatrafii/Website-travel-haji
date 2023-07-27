/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        goyang: "goyang 2s ease-in-out infinite",
        updown: "updown 2s ease-in-out infinite",
      },
      keyframes: {
        goyang: {
          "0%,100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        updown: {
          "0%,100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
      },
    },
  },
  plugins: [],
};
