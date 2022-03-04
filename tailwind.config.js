module.exports = {
  content: ["./public/index.html", "./src/**/*.html,js"],
  theme: {
    extend: {
      colors: {
        primary: "#FF3636",
        secondary: {
          100: "#E2E2D5",
          200: "888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
