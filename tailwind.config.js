  module.exports = {
      purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      darkMode: false, // or 'media' or 'class'
      theme: {
          extend: {},
          colors: {
              white: "#fff",
              lightBlue: "#F5F9FD",
              bgGray: "#F2F3F5",
              cusGrey: "#818C99",
              cusGrey2: "#EBEDF0",
              borderCol: "rgba(129, 140, 153, 0.15)",
              lightRed: "#FF3347",
              primary: "#3F8AE0",
              modalBg: "rgba(0, 0, 0, 0.1)",
          },
      },
      variants: {
          extend: {},
      },
      plugins: [
          function ({ addComponents }) {
              addComponents({
                  ".container": {
                      minWidth: "1140px",
                      maxWidth: "100%",
                      "@screen sm": {
                          maxWidth: "640px",
                      },
                      "@screen md": {
                          maxWidth: "768px",
                      },
                      "@screen lg": {
                          maxWidth: "1280px",
                      },
                      "@screen xl": {
                          maxWidth: "1400px",
                      },
                  },
              });
          },
      ],
  };
