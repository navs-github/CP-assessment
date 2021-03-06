module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pattern': "url('../pattern.png')",
        'hero': "url('../img/hero.png')"
      })
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      msm: { max: "640px" },
      mmd: { max: "768px" },
      mlg: { max: "1024px" },
      mxl: { max: "1280px" },
      m2xl: { max: "1536px" },
    },
    fontFamily: {
      poppins: ['Poppins'],
      sofia: ['Sofia'],
      space: ['Space Mono'],
      inter: ['Inter'],
    },
    keyframes: {
      slidedown: {
        '0%': {
          transform: 'translateY(-20px)',
          opacity: '0%'
        },
        '100%': {
          transform: 'translateX(0px)',
          opacity: '100%'
        },
      }
    },
    animation: {
      'slidedown': 'slidedown 0.5s ease'
    },
  },
};