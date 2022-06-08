module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: '#008CCC',
        violet: '#63BCE5',
        'light-blue': '#A6D2F0',
        'medium-gray': '#707070',
        'light-gray': '#D1D2D4',
      },
    },
  },
  plugins: [],
};
