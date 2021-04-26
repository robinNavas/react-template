const header = require("./settings/headers.js");

//  Les imports relatifs à webpack
const path = header.path;

//  Les règle dont va se servir
const modules = require("./settings/modules.js");

// if we use yarn
// const yarnModules = path.resolve(__dirname, '')

module.exports = {
  entry: "./src/index.tsx",

  output: {
    filename: "[name].bundle.js",

    path: header.path.resolve(__dirname, "dist"),

    clean: true
  },

  module: modules,

  plugins: [
    new header.plugins.HtmlWebpackPlugin({
      title: "Webpack Template Youhou",
      template: "src/page/template.ejs"
    }),
    new header.plugins.MiniCssExtractPlugin()
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias:{
      style: path.resolve(__dirname, "src/styles"),
      assets: path.resolve(__dirname, "src/static"),
      fonts: path.resolve(__dirname, "src/static/fonts")
    }
  }
};
