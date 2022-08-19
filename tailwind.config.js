/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        '558': '34.875rem',
      },
      colors: {
        backgroundColor: '#1C133B',
        purpleControlly: '#6747E8'
      },
      boxShadow: {
        'card': '0 3px 6px rgba(0, 0, 0, .03)',
      },
      fontFamily: {
        'sans': ['Metropolis', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
