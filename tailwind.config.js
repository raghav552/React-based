/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'text-shimmer': {
          '0%': { 'background-position': '-500% 0' },
          '100%': { 'background-position': '500% 0' },
        },
      },
    },
  },
  plugins: [],
}