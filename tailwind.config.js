/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        territory: {
          primary: "#1e40af",
          secondary: "#3b82f6", 
          accent: "#60a5fa"
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif"
        ]
      }
    }
  },
  plugins: [],
}
