const header = require("./headers.js");

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: header.exclude,
      use: "babel-loader",
      enforce: "pre"
    },
    {
      test: /\.(ts|tsx)$/,
      use: "ts-loader",
      exclude: header.exclude
    },
    {
      test: /\.(css|scss)$/,
      exclude: header.exclude,
      use: [
        header.plugins.MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [["postcss-preset-env", {}]]
            }
          }
        }
      ]
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      type: "asset/resource"
    },
    {
      test: /\.(ttf|otf|woff|woff2)$/,
      type: "asset/resource"
    }
  ]
};
