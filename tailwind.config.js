// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
        libre: ['Libre Baskerville', 'serif'],
        shadows: ['"Shadows Into Light"', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        'custom-green': '#5c7c57',
        'custom-brown': '#c3956a',
        'custom-blue': '#1e3a8a', // Additional custom color
        'custom-gray': '#d1d5db', // Additional custom color
      },
      spacing: {
        'underline-offset': '4px',
        'extra-small': '2px', // Additional spacing size
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.3)', // Custom shadow
      },
      borderRadius: {
        'extra-large': '1.5rem', // Custom border radius
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
