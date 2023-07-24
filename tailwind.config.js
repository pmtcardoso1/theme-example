/** @type {import('tailwindcss').Config} */
import defaultTheme from './src/themes/theme'

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky": {
          900: defaultTheme.colors.surface
        },
        "blue": {
          500: defaultTheme.colors.primary
        },
        // ...defaultTheme.colors
      }
    },
  },
  plugins: [],
}

