/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        content: "#1d1836",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('../../static/herobg.png')",
      // },
      backgroundImage: {
        "home-pattern": "url('../../static/homebg.png')",
        "about-pattern": "url('../../static/headerImg.svg')",
      },
      backgroundSize: {
        "20%": "20%",
        "40%": "40%",
        "60%": "60%",
        "80%": "80%",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 禁用 Tailwind 的基础样式重置
  },
}

