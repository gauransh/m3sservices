/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // Ensure Tailwind processes all relevant files
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    // Optionally include:
    // './archetypes/**/*.md',
    // './content/**/*.html',
  ],
  theme: {
    // Custom screen sizes for responsiveness
    screens: {
      xs: '285px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      // Extend or override default fonts
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      // Example custom brand colors
      colors: {
        brandPink: '#ff80b5',
        brandPurple: '#9089fc',
        // Add more custom colors here if desired
      },
      // If needed, define container defaults
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  // Add common Tailwind plugins for forms, typography, line clamping, etc.
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
