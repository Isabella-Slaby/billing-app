module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path based on your project structure
    './public/index.html',
  ],
  safelist: [
    'transition-opacity',
    'duration-300',
    'ease-in-out',
    'opacity-100',
    'opacity-0',
  ],
  theme: {
    extend: {
      colors: {
        christianaBlue: '#003366',
        christianaGreen: '#006633',
        christianaTeal: '#009999',
      },
    },
  },
  plugins: [],
}
