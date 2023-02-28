/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./stories/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aboutUs': "url('/public/AboutUs.png')"
      }
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
      mobh2: ['24px', '38px'],
      mobh3: ['21px', '33px'],
      mobh4: ['19px', '30px'],
      mobbase: ['18px', '28px'],
      mobsm: ['16px', '25px'],
      mobxs: ['15px', '23px'],
      mobxxs: ['14px', '22px'],
      xxxs: ['20px', '31px'],     // Estranho esse valor no menor
      xxs: ['18px', '28px'],
      xs: ['21px', '33px'],
      sm: ['24px', '38px'],
      base: ['26px', '40px'],
      lg: ['30px', '47px'],       // h4
      xl: ['36px', '56px'],       // h3
      '2xl': ['48px', '75px'],    // h2
      '3xl': ['66px', '103px']    // h1
    },
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '4k': '2560px'
    },
  },
  plugins: [],
}
