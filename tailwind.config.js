/** @type {import('tailwindcss').Config} */
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
      transitionProperty : {
        'width' : "100%"
      }
    },
  },
  plugins: [],
}

