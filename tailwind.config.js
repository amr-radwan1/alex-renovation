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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1921px',
      // => @media (min-width: 1921px) { ... }
    }
  },
  plugins: [],
}

