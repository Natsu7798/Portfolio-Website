/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'putihAbuMuda': '#f0f5f9',
        'putihAbu': '#c9d6df',
        'abu': '#52616b',
        'hitamMuda': '#1e2022',
        'oren': '#f97316',
        'unguBiasa': '#6d28d9',
        'unguPastel': '#c4b5fd',
      },
      keyframes: {
        typing: {
          '0%': { width: '0ch' },  // Start typing from the beginning
          '100%': { width: '18ch' },  // Type until the text is fully displayed
        },
        blink: {
          '50%': { 'border-color': 'transparent' },  // Blink effect for the cursor
          '100%': { 'border-color': 'black' },
        },
      },
      animation: {
        typing: 'typing 3s steps(18) infinite, blink .75s step-end infinite',  // Typing animation will loop infinitely
      },
    },
  },
  plugins: [],
}
