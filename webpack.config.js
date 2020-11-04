const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const gsapPath = '/node_modules/gsap/src/uncompressed/';

module.exports = {
 devtool: 'source-map',
 mode: 'development',
 entry: path.join(__dirname, 'src', 'index.tsx'),
 watch: true,
 output: {
  filename: '[name].js',
  path: path.resolve(__dirname, 'dist'),
  sourceMapFilename: '[name].js.map',
  publicPath: '/'
 },
 module: {
  rules: [
   {
    test: /\.(tsx|ts)$/,
    use: ['babel-loader', 'ts-loader', 'tslint-loader']
   },
   {
    test: /\.scss$/,
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
       plugins: [require('autoprefixer')()],
       sourceMap: true
      }
     },
     {
      loader: 'sass-loader',
      options: {
       sourceMap: true
      }
     }
    ]
   },
   {
    test: /\.(png|jp(e*)g|svg|gif)$/,
    use: [
     {
      loader: 'url-loader',
      options: {
       limit: 8000,
       sourceMap: true
      }
     }
    ]
   },
   {
    test: /\.(ttf|eot|woff|woff2)$/,
    use: {
     loader: 'file-loader',
     options: {
      name: 'fonts/[name].[ext]'
      // sourceMap: true
     }
    }
   },
   {
    test: /\.(glb|gltf)$/,
    use: [
     {
      loader: 'file-loader',
      options: {
       outputPath: 'assets/models',
       sourceMap: true
      }
     }
    ]
   },
   {
    test: /\.(bin)$/,
    use: [
     {
      loader: 'file-loader',
      options: {
       outputPath: 'assets/models',
       sourceMap: true
      }
     }
    ]
   }
  ]
 },
 resolve: {
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  modules: ['node_modules', path.resolve(__dirname, 'src')],
  alias: {
   TweenLite: 'gsap',
   CSSPlugin: 'gsap',
   Draggable: path.join(__dirname, gsapPath + 'utils/Draggable.js'),
   ScrollToPlugin: path.join(__dirname, gsapPath + 'plugins/ScrollToPlugin.js')
  }
 },
 devServer: {
  historyApiFallback: true,
  contentBase: './dist',
  inline: true,
  host: 'localhost',
  port: 3000
 },
 plugins: [
  new CleanWebpackPlugin({ verbose: true }),
  new HtmlWebpackPlugin({
   template: path.join(__dirname, 'src', 'index.html')
  }),
  new webpack.ProvidePlugin({
   TweenMax: 'gsap'
  }),
  new CopyWebpackPlugin({
   patterns: [{ from: 'src/assets' }]
  })
 ]
};
