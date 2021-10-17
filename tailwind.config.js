module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        cardHover: '2px 8px 4px -6px hsla(0,0%,0%,.3)',
        card: '20px 38px 34px -26px hsla(0,0%,0%,.2)'
      },
      backgroundColor: {
        'card': '#F0F0D8'
      }
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover', 'focus'],
    },
  },
  plugins: [],
}
