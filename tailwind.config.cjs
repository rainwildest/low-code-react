module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        50.5: "12.625rem" /*202px*/,
        61: "15.25rem" /* 244px */
      },
      minHeight: {
        50.5: "12.625rem" /*202px*/,
        61: "15.25rem" /* 244px */
      },
      minWidth: {
        20: "5rem" /* 80px */,
        28: "7rem" /* 112px */,
        36: "9rem" /*144px*/
      },
      maxWidth: {
        28: "7rem" /* 112px */,
        36: "9rem" /*144px*/
      },
      colors: {
        gray: {
          1000: "#f2f5fa" /* 用底色 */,
          1100: "#f9fbfd" /* 用于 card 之类 */,
          1200: "#111520" /*用于黑色字体 */
        },
        purple: {
          1000: "#29263d" /* 用底色 */,
          1100: "#3b3854" /* 用于 card 之类 */,
          1200: "#eeecff" /* 用于白色字体*/,
          1300: "#432a49",
          1400: "#332855"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
