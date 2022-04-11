module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          900: '#3d556f',
        },
        gold: {
          500: '#c8b274',
        },
        green: {
          400: '#30ab66',
          500: '#2ecc71',
        },
        blue: {
          500: '#0887d4',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '15px',
        },
        maxWidth: {
          DEFAULT: '100%',
          lg: '1140px',
          xl: '1140px',
          '2xl': '1140px',
        },
      },
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1140px',
          },
        },
      })
    },
  ],
}
