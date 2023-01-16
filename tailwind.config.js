/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./stories/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: "#FFF",
      black: "#000",
      'primary-gray': '#E5E5E5',
      'primary-orange': '#FF4800',
      'primary-purple': '#660066',
    },
    fontSize: {
      xxxs: ['20px', '31px'],     // Estranho esse valor no menor
      xxs: ['18px', '28px'],
      xs: ['21px', '33px'],
      sm: ['24px', '38px'],
      base: ['26px', '40px'],
      lg: ['30px', '47px'],       // h4
      xl: ['36px', '56px'],       // h3
      '2xl': ['48px', '75px'],    // h2
      '3xl': ['66px', '103px']    // h1
    }
  },
  plugins: [],
}
