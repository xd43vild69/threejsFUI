const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  module: {
      rules: [
          {
              test: /\.handlebars$/,
              loader: 'handlebars-loader'
          },
          {
              test: /\.(sa|sc|c)ss$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ],
          },
          {
              test: /\.(jpg|png|gif)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[name].[ext]',
                          outputPath: 'static/',
                          useRelativePath: true
                      }
                  },
                  {
                      loader: 'image-webpack-loader',
                      options: {
                          mozjpeg: {
                              progressive: true,
                              quality: 65
                          },
                          // optipng.enabled: false will disable optipng
                          optipng: {
                              enabled: false,
                          },
                          pngquant: {
                              quality: '65-90',
                              speed: 4
                          },
                          gifsicle: {
                              interlaced: false,
                          },
                          // the webp option will enable WEBP
                          webp: {
                              quality: 75
                          }
                      }
                  }
              ]
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin({
        filename: "css/[name]-styles.css",
        chunkFilename: "[id].css"
    })
  ]
};