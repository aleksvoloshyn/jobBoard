const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '396px',
      desktop: '1400px',
    },
    colors: {},
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        secondary: '#878D9D',
        pages: 'rgba(56, 65, 93, 0.602109)',
        applbutton: '#384564',
        geolocation: '#E7EAF0',
        geolocationBg: '#2A3047',
        detPrText: '#3A4562',
        hr: '#3A4562',
        detSecText: '#38415D',
        butEmplType: 'rgba(161, 177, 219, 0.317343)',
        butEmplTypeTxt: '#55699E',
        butEmplTypeBrdr: 'rgba(85, 105, 158, 0.3)',
        butBeniBg: 'rgba(255, 207, 0, 0.15);',
        butBeniTxt: '#988B49',
        butBeniBrdr: '#FFCF00',
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      width: {
        mobile: '396px',
        desktop: '1400px',
        location: '13px',
        bookmark: '24px',
        share: '18px',
        star: '20px',
        mapMobile: '372px',
        contDesktop: '402px',
        '515px': '515px',
      },

      border: { hr: '#3A4562' },

      height: {
        mobile: '206px',
        avatarMob: '66px',
        avatarDesktop: '85px',
        share: '20px',
        location: '18px',
        bookmark: '24px',
        star: '20px',
        button: '52px',
        mapMobile: '436px',
        contMobile: '206px',
        contDesktop: '436px',
        googleMobile: '230px',
      },
      margin: {
        inh: 'inherit',
      },
      backgroundColor: {
        mobile: '#EFF0F5',
      },
      dropShadow: {
        mobile: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
