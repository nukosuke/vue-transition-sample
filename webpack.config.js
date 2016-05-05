var path = require('path');
var current = process.cwd();

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss'],
    root: [
      path.join(current, 'src/js'),
      path.join(current, 'src/css'),
    ],
  },
  module: {
    loaders: [
      { test: /\.css$/   , loader: 'style!css' },
      { test: /\.scss$/  , loaders: ['style', 'css', 'sass'] },
    ],
  },
};
