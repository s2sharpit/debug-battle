/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'wb': '2px 4px 10px 1px rgba(200, 200, 200, 0.44)',
      },
    },
  },
  plugins: [],
}