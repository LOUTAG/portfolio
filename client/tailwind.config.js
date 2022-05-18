module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,json}"
  ],
  theme: {
    extend: {
      colors:{
        theme: '#2A2A2A',
        primary: '#FCC86E',
        secondary: '#B0C3CC'
      },
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif']
      },
      keyframes: {
        appear : {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        appear : 'appear 0.5s linear'
      },
      minHeight : {
        '1/2': '50vh'
      }
    },
  },
  plugins: [],
}
