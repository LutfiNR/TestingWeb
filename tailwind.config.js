/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
      'intro': "url('../assets/bg-home.png')"
      },
      backgroundColor: {
        '0078AA' : "#0078AA",
        'F2DF3A' : "#F2DF3A"
      },
      fontFamily: {
        'montserrat' : ['Montserrat']
      },
      dropShadow: {
        'sm-lightblue' : "-3px -3px 0px #3AB4F2",
        'sm-darkblue' : "-3px -3px 0px #0078AA",
        'md-white' : "-8px -8px 0px #fff"
      },
      textColor : {
        '0078AA' : "#0078AA",
        '3AB4F2' : "#3AB4F2"
      },
      animation : {
        'load' : "load 0.7s ease-in-out",
        'slideup' : "slideup 1s ease-in-out",
        'slidedown' : "slidedown 1s ease-in-out"
      },
      keyframes : {
        'load' : {
          'from' : { width: '0' }
        },
        'slideup' : {
          '0%' : {transform: "translateY(50px)"},
          '100%' : {transform: "translateY(0)"}
        },
        'slidedown' : {
          '0%' : {transform: "translateY(-50px)"},
          '100%' : {transform: "translateY(0)"}
        }
      }
    },
  },
  plugins: [Myclass],
}

