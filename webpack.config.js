const path = require('path')

const HTMLWebpackPlagin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlagin = require('copy-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  devServer: {
    port: 4500,
    open: true,
    hot: true
  },
  plugins: [
    new HTMLWebpackPlagin({template: './index.html'}),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  }
}