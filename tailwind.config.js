/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          'sectionone-bg': "url('/background-opaque.png')",
          'footer-texture': "url('/img/footer-texture.png')",
        },

        fontFamily: {
          bebas: ['"Bebas Neue"', 'sans-serif'],
      },

        height: {
          '100': '32rem',
        },
        backgroundColor:{
          'tailoredOrange':'#d84315'
        },
        borderColor:{
          'tailoredOrange':'#d84315'
        },
        textColor:{
          'tailoredOrange':'#d84315'
        }
    },
  },
  plugins: [],
}

