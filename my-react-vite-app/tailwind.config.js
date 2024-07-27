/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "copy": "#c026d3",
        "my-purple": "#6366f1",
        "my-green": "#16a34a",
        "prp":"#0f172a",
        "card":"#1e293b",
        "text":"#10b981",
        "headerbg":"#7e22ce"

      },
    },
  },
  plugins: [],
}
