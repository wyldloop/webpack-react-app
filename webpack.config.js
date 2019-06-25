var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-plugin');

var BUILD_DIR = path.join(__dirname, 'dist/');
var RESOLVE_PATH = path.resolve(__dirname, 'dist/');
var APP_DIR = path.join(__dirname, 'src/');
var SCSS_DIR = path.join(__dirname, 'src/scss/');
var IMG_DIR = path.join(__dirname, 'src/img/');

const VENDOR_LIBS =[
  'react', 'react-dom', 'react-router-dom'
]

var config = {
  mode: 'production',
  entry:{
    bundle: APP_DIR + 'index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: RESOLVE_PATH,
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.(s*)css$/, // match any .scss or .css file,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader'
      }
    ]
  },
  devServer:{
    contentBase: BUILD_DIR,
    compress: true,
    port: 9000,
    https: false, // Change to true if wanting https
    disableHostCheck: false,
    open: true,
    hot: true
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
    new CnameWebpackPlugin({
      domain: 'example.com' //Change this for CNAME file for GH Pages
    }),
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new GoogleFontsPlugin({
      "google-fonts-plugin": {
        fonts: [
          { family: "Lato", variants: [ "300","400","700" ] },
          { family: "Montserrat", variants: [ "400","500","700" ] }
        ]
      }
		})
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
}

module.exports = config;
