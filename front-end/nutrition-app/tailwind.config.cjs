/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx, jsx,js}"],
  theme: {
    extend: {
      screens: {
        'fhd': '1720px',
        '2xl': '1580px',
        'xl': '1448px',
      },
      animation: {
        'fadeinspecial': 'fadein .5s ease-out'
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0%', marginTop: '3rem' },
          '100%': { opacity: '100%', marginTop: '0' }
        }
      }
    },
  },
  
  plugins: [],
} 