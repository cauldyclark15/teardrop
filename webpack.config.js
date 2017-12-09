const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/public"),
    publicPath: "/public/",
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
};
