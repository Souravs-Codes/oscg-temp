/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38BDF8",
        status: "#22C55E",
        accent: "#A855F7",
        background: "#0B1120",
        surface: "#15213B",
        text: "#E2E8F0",
        muted: "#94A3B8",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(0, 176, 255, 0.35)",
      },
    },
  },
  plugins: [],
}
