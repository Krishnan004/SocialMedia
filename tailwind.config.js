/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Example custom colors
        primary: '#3490dc',
        secondary: '#ffed4a',
        // Add more custom colors as needed
      },
      fontFamily: {
        // Example custom fonts
        sans: ['Roboto', 'sans-serif'],
        // Add more custom fonts as needed
      },
      // You can extend other parts of the theme such as spacing, typography, etc.
    },
  },
  plugins: [
    // Example plugin configuration
    require('@tailwindcss/forms'), // Plugin for styling form elements
    // Add more plugins as needed
  ],
}