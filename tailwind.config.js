module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // https://mdigi.tools/color-shades/#ff6719
        //bg-colors:#52BFDB
        primary: {
          50: "#fff1ea",
          100: "#ffd5bf",
          150: "#ffb995",
          200: "#ff9d6a",
          250: "#ff8140",
          300: "#ff6415",
          350: "#ff6415",
          400: "#bf4100",
          450: "#953200",
          500: "#6a2400",
          550: "#401600",
          600: "#401600",
        },

        // text

        secondary: {
          50: "#f4f4f4",
          100: "#dfdfdf",
          150: "#cacaca",
          200: "#b5b5b5",
          250: "#9f9f9f",
          300: "#8a8a8a",
          350: "#757575",
          400: "#606060",
          450: "#606060",
          500: "#353535",
          550: "#202020",
          600: "#202020",
        },
      },
    },
  },
};
