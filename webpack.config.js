const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const settings = {
 distPath: path.join(__dirname, 'dist'),
 srcPath: path.join(__dirname, 'src')
};

function srcPathExtend(subpath) {
 return path.join(settings.srcPath, subpath);
}

const root = __dirname;

const gsapPath = '/node_modules/gsap/src/uncompressed/';

module.exports = {
 devtool: 'source-map',
 mode: 'development',
 entry: path.join(__dirname, 'src', 'index.tsx'),
 watch: true,
 output: {
  filename: '[name].js',
  path: path.resolve(__dirname, 'dist'),
  sourceMapFilename: '[name].js.map'
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
      name: 'fonts/[name].[ext]',
      sourceMap: true
     }
    }
   },
   {
    test: /\.(gltf)$/,
    use: [
     {
      loader: 'gltf-webpack-loader',
      options: {
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
   Draggable: path.join(root, gsapPath + 'utils/Draggable.js'),
   ScrollToPlugin: path.join(root, gsapPath + 'plugins/ScrollToPlugin.js')
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
   template: srcPathExtend('index.html')
  }),
  new webpack.ProvidePlugin({
   TweenMax: 'gsap'
  })
 ]
};
