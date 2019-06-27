const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");
module.exports = {
  mode: "development",
  entry: './src/index.js',
  plugins: [
    new MinifyPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          
          options: {
          presets: ['@babel/preset-env']

        }
        }
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
    }
    ]
  }
};