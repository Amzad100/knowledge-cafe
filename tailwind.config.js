/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#04e238",

          "secondary": "#101aa8",

          "accent": "#85d841",

          "neutral": "#2A3037",

          "base-100": "#F5F5F5",

          "info": "#3BC1F1",

          "success": "#1AD572",

          "warning": "#C09807",

          "error": "#ED3B4A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

