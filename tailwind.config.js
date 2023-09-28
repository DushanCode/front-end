/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '16rem',
        },
      },
      backgroundColor: {
        pinkBg: '#feb2b2',
        ashBg: '#cbc6c0',
        blackBg: '#3b3a3a',
        navBg: '#dbdad6',
        blogBg: '#d5c3bf',
        footerBg: '#3daeaa',
        commBg: '#8ad1cd',
        reviewBg: '#383838',
      },

      backgroundImage: {
        blog: 'url(assets/bg-1.jpeg)',
      },

      gridTemplateRows: {
        6: 'repeat(6, minmax(100px))',
      },
    },
  },
  plugins: [],
};
