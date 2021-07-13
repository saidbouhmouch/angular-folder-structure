const plugin = require('tailwindcss/plugin');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  purge: [
    './src/app/**/*.html',
  ],
  theme: {
    screens: {
      xs: { 'max': '640px' },
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px'
    },
    extend: {
      colors: {
        grey: {
          100: "#F1F5F8",
          200: "#F2F6F9",
          300: "#95adbe",
          500: "#BDBDBD",
          600: "#95ADBE",
          700: "#e4e4e4",
          800: "#8192A6",
          900: "#33394E",
          1000: "#F8F8F8"
        },
        blue: {
          500: "#2B58DC",
          800: "#62a7e4",
          900: "#144182",
          1000:"#ECEFF2"
        },
        orange: {
          10: "#F6AC3E",
          80: "#EBAD51",
          200: "#EB6608",
          300: "#eb6608e0"
        },
        green: {
          500: "#76B72A",
          1000: "#9AE646"
        },
        black: {
          100: "#1C1F28",
          200: "#1717177a"
        },
        red: {
          1000: "#D75A4A"
        }
      },
      borderRadius: {
        xl: "10px",
      },
      borderWidth: {
        small: "0.4px",
      },
      boxShadow: {
        100: "0 0 30px 0 rgba(233,233,233,0.50)",
        sm: "0px 18px 24px -10px rgba(0, 0, 0, 0.0295017)",
        none: "none",
      },
      fontFamily: {
        "helvetica": ["Helvetica"]
      },
      fontSize: {
        md: '0.9375rem'
      },
      minHeight: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screen: '100vh',
      }),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {

      const customUtilities = {
        '.-translateX-100': {
          transform: 'translateX(-100%)'
        },
        '.translateX-0': {
          transform: 'translateX(0)'
        },
        '.-z-99': {
          zIndex: '-99'
        }
      }
      addUtilities(customUtilities)
    })
  ],
};
