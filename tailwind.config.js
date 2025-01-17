/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--text)",
        border: "var(--border)",
        separator: "var(--separator)",
        secondary: "var(--secondary)"
      },
    },
  },
  plugins: [],
}

