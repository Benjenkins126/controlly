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
        '950': '1050px',
      },
      height: {
        'nav': '87px',
        'changelog': '558px',
      },
      colors: {
        backgroundColor: '#1C133B',
        purpleControlly: '#6747E8',
        redError: '#FF0000',
        greenSuccess: '#1DC356',
        primaryAlert: 'rgba(103, 71, 232, .2)',
        bgContent: '#F7F7F7',
        dangerRed: '#E84747',
        startGreen: '#1E963E',
        restartAmber: '#FFB07E',
        stopRed: '#CB3333'

      },
      boxShadow: {
        'card': '0 3px 6px rgba(0, 0, 0, .03)',
      },
      fontFamily: {
        'sans': ['Metropolis', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xxs': '10px',
      },
      flexBasis: {
        'sidebar': '290px',
        'main': 'calc(100% - 290px)',
      },
      gridTemplateRows: {
        'masonary': 'masonary',
      },
      minHeight: {
        'group': '240px',
      }
    },
  },
  plugins: [],
}
