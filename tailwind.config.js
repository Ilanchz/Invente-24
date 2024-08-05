module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'], // Existing font
        libre: ['Libre Baskerville', 'serif'], // Existing font
        shadows: ['"Shadows Into Light"', 'cursive'], // Add Shadows Into Light font
        raleway: ['Raleway', 'sans-serif'], // Add Raleway font
      },
      colors: {
        'custom-green': '#5c7c57',
        'custom-brown': '#c3956a',
      },
      spacing: {
        'underline-offset': '4px', // Add an offset for the underline
      },
    },
  },
  plugins: [],
}