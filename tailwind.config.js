module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'wintergreen': '#689689',
        'sonicSilver': '#767676',
        'wheat': '#F3D9B1',
        'darkwheat':'#C29979',
        'pineBlack': '',
        'dark':'#2C3333',
        'seawhile':{
          'light':'#395B64',
          'medium':'#A5C9CA',
          'dark': '#E7F6F2'
        },
        'claymore':{
          'light':'#F5C7A9',
          'medium':'#D1512D',
          'dark':'#411530'
        }
      },

      animation: {
        'fill-progress': 'fill 1s ease-in-out',
      },

      keyframes: {
        fill: {
          '0%': { transform: 'scaleX(0)' },
          // '25%': { transform: 'scaleX(1) translateX(70%)' },
          // '50%': { transform: 'scaleX(0) translateX(-150%)' },
          
        }
      },

    },
  },

  variants: {
    extend: {
      gradientColorStops: ["hover"],
    },
  },
  plugins: [],
};
