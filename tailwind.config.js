const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {},

    extend: {
      colors: {
        secondary: '#878D9D',
        pages: 'rgba(56, 65, 93, 0.602109)',
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      width: {
        mobile: '396px',
        avatar: '66px',
        location: '13px',
      },
      height: {
        mobile: '206px',
        avatar: '66px',
        location: '18px',
      },
      backgroundColor: {
        mobile: '#EFF0F5',
      },
      dropShadow: {
        mobile: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        '18px': '18px',
        '16px': '16px',
      },
      lineHeight: {
        '24px': '24px',
        '25px': '25px',
      },
      padding: {
        '9px': '9px',
        '13px': '13px',
        '27px': '27px',
        '17px': '17px',
        '45px': '45px',
        '54px': '54px',
      },
      margin: {
        '19px': '19px',
        '100px': '100px',
        '17px': '17px',
        '7px': '7px',
        '5px': '5px',
        '26px': '26px',
      },
    },
  },
  plugins: [],
}
