import config from './postcss.config.mjs'

/** @type {import('tailwindcss').Config} */
const con =  {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#122454",
        lightNavy: "#1e3a8a",
        green: "#139a34",
        gray: "#374151",
        cyan: "#2de1fc"
      },
      fontFamily:{
        Roboto: ["Roboto"],
        Mono: ["Roboto Mono"]
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '100%': { transform: 'translateY(-100%)', opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.2s ease-out',
        slideUp: 'slideUp 0.2s ease-in',
      },
    },
  },
  plugins: [],
};

export default con;