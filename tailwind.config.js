module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "terre-battue": "#FC921A", //#FC921A
      },
      height: {
        "1/2-screen": "50vh",
        "9/10-screen": "80vh",
      },
      // text: {
      //   colors: {
      //     "terre-battue": "#e95739", //#FC921A
      //   },
      // },
    },
  },
  plugins: [],
};
