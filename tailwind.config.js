/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./src/components/*.{html,js,jsx}"
],
  theme: {
    extend: {
      gridColumn: {
        'span-1.5' : 'span 1.5 / span 1.5',
      }
    },
    screens: {
      'xs': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      // 'xl': '1280px',
    }
  },
  plugins: [],
}

