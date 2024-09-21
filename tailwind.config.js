const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
        libre: ['Libre Baskerville', 'serif'],
        shadows: ['"Shadows Into Light"', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'], // Add Roboto here
      },
      colors: {
        'custom-green': '#5c7c57',
        'custom-brown': '#c3956a',
        'custom-blue': '#1e3a8a',
        'custom-gray': '#d1d5db',
      },
      spacing: {
        'underline-offset': '4px',
        'extra-small': '2px',
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'extra-large': '1.5rem',
      },
      animation: {
        'scroll-left': 'scrollLeft 30s linear infinite',
        'scroll-right': 'scrollRight 30s linear infinite',
        'flip': 'flip 0.6s ease-in-out',
        'growShrink': 'growShrink 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-border': 'spin-border 3s linear infinite', // Add the spin border animation
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        flip: {
          '0%': { transform: 'rotateX(0deg)', opacity: 1 },
          '100%': { transform: 'rotateX(180deg)', opacity: 0 },
        },
        growShrink: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'spin-border': { // Define keyframes for the color spin border
          '0%': { borderColor: 'red' },
          '14%': { borderColor: 'orange' },
          '57%': { borderColor: 'blue' },
          '71%': { borderColor: 'indigo' },
          '85%': { borderColor: 'violet' },
          '100%': { borderColor: 'red' },
        },
      },
      backgroundImage: {
        'starry-sky': 'url(https://images.unsplash.com/photo-1628498188873-579210ce622e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'deep-charcoal-gradient': 'linear-gradient(to right, #010B19, #03214a)',
      },
      height: {
        'large': '750px',
      },
    },
  },
  plugins: [nextui()],
}
