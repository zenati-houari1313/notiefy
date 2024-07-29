/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "copy": "#405D72",
        "my-purple": "#6366f1",
        "my-green": "#16a34a",
        "prp":"#758694",
        "card":"#78ABA8",
        "text":"#10b981",
        "headerbg":"#7e22ce"

      },
    },
  },
  plugins: [],
}
