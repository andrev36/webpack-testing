const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const settings = {
 distPath: path.join(__dirname, 'dist'),
 srcPath: path.join(__dirname, 'src')
};

function srcPathExtend(subpath) {
 return path.join(settings.srcPath, subpath);
}

module.exports = (options) => {
 return {
  devtool: 'source-map',
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  watch: true,
  output: {
   filename: 'index.js',
   path: path.resolve(__dirname, 'dist')
  },
  module: {
   rules: [
    {
     test: /\.tsx?$/,
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
     test: /\.(ttf|eot|woff|woff2)$/,
     use: {
      loader: 'file-loader',
      options: {
       name: 'fonts/[name].[ext]'
      }
     }
    },
    {
     test: /\.(jpe?g|png|gif|svg|ico)$/i,
     use: [
      {
       loader: 'file-loader',
       options: {
        outputPath: 'assets/'
       }
      }
     ]
    }
   ]
  },
  resolve: {
   extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
  },
  devServer: {
   contentBase: './dist',
   inline: true,
   host: 'localhost',
   port: 3000
  },
  plugins: [
   new CleanWebpackPlugin({ verbose: true }),
   new HtmlWebpackPlugin({
    template: srcPathExtend('index.html')
   })
  ]
 };
};
