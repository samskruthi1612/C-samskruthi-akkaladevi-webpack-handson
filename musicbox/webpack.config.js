const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./images", to: "./images" },
        { from: "./index.html", to: "" },
      ],
    }),
  ],
  module: {
    rules: [
      {
          test: /\.css$/, // 1.compile sass, 2.css loader, 3.create separate css file,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
       {
        test: /\.scss$/, // 1.compile sass, 2.css loader, 3.create separate css file,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
  },
};
