module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'primary': '#30E9A6',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'form': '#C6C6C6',
     }),
    extend: {
      fontFamily: {
        viga: ['Viga'],
        body: ['Work Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
