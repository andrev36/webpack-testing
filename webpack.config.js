const path = require('path');

module.exports = {
 entry: { app: './src/index.js' },
 output: {
  filename: 'index.js',
  path: path.resolve(__dirname, 'dist')
 },
 module: {
  rules: [
   // { test: /\.css$/, use: 'css-loader' },
   { test: /\.ts$/, use: 'ts-loader' },
   { test: /\.sss$/, loader: 'sass-loader' }
  ]
 }
};
