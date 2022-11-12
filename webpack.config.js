const path = require("path");
const openBrowser = require("react-dev-utils/openBrowser");
module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    hot: false,
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }
      const addr = devServer.server.address();
      openBrowser(`http://localhost:${addr.port}`);
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
