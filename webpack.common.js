//  Les imports relatifs à webpack
const path = require("path");

//  Les plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//  On définit les dossiers à exclure
const nodeFolder = path.resolve(__dirname, "node_modules");
// if we use yarn
// const yarnModules = path.resolve(__dirname, '')
module.exports = {
  entry: "./src/index.tsx",

  output: {
    filename: "[name].bundle.js",

    path: path.resolve(__dirname, "dist"),

    clean: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: nodeFolder,
        use: "babel-loader",
        enforce: "pre"
      },
      {
        test: /\.(css|scss)$/,
        exclude: nodeFolder,
        use: [
          MiniCssExtractPlugin.loader,
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
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: nodeFolder
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Template Youhou",
      template: "src/page/template.ejs"
    }),
    new MiniCssExtractPlugin()
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
