const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {VueLoaderPlugin} = require('vue-loader/dist/index')

const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      title: '环境'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 2500,
    publicPath: "/",
    open: true
  }
}
