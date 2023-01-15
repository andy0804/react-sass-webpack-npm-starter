const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV!=='production';
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.s?css$/,
        exclude:/\.module\.(sa|sc)ss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.(sa|sc)ss$/,
        use: [
          devMode?'style-loader':MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules:{
                localIdentName:"[local]-[hash:base64:5]"
              }
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts','.scss'],
  },
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, './public'),
    hot: true,
  },
};
