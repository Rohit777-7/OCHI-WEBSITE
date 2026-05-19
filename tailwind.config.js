// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // FIX: Only scan files inside the 'src' folder and the main HTML
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}