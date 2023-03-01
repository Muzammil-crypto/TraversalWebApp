/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dim': '#E1ECD8',
      
      'card': '#F8F8F8',
      'header': '#77BB3F',
      'footer': '#292929',
      'background': '#F5F5F5',
      'fontColor': '#292929',
      'white': '#FFFFFF',
      'black': '#000000',
      'blend': 'rgba(0, 0, 0, 0.84)',
      'primary': '#77BB3F',
      'secondary': '#E1ECD8',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      h1: '3.052rem',
      h2: '40px',
      h3: '35px',
      h4: '26px',
      h5: '26px',
      h6: '16px',
      h1_mobile: '1.25rem',
      h2_mobile: '28px',
      h3_mobile: '24px',
      h4_mobile: '20px',
      h5_mobile: '18px',
      h6_mobile: '16px',

      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        '3xl': '4px 4px 4px rgba(0, 0, 0, 0.25)',
        'normal': '0px 4px 4px rgba(0, 0, 0, 0.25)'
        
      }
    }
  },
  plugins: [],
}