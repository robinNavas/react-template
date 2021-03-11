//  Les imports relatifs à webpack
const path = require("path");
exports.path = path;

const plugins = {
  MiniCssExtractPlugin: require("mini-css-extract-plugin"),
  HtmlWebpackPlugin: require("html-webpack-plugin")
};
exports.plugins = plugins;

const nodeFolder = path.resolve(__dirname, "node_modules");
exports.exclude = nodeFolder;
