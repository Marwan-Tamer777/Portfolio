module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'wintergreen': '#689689',
        'autumngreen':'#7FE9C9',
        'sonicSilver': '#767676',
        'wheat': '#F3D9B1',
        'darkwheat':'#C29979',
        'pineBlack': '#30362F',
        'dark':'#2C3333',
        'seawhile':{
          'lighter':'#2BA8C9',
          'light':'#E7F6F2',
          'medium':'#A5C9CA',
          'dark': '#395B64'
        },
        'claymore':{
          'light':'#F5C7A9',
          'medium':'#D1512D',
          'dark':'#411530'
        }
      },

      animation: {
        'fillProgress': 'fill 1s ease-in',
        'slideInLeft': 'slideInLeft 1s ease-out'
      },

      keyframes: {
        fill: {
          '0%': { 'width':0 },
        },
        slideInLeft:{
          '0%':{'transform': 'translateX(-50%)',
                'filter':"blur(5px)",
                'opacity':0
          }
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
