var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],
  cache:false,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist/'),
    publicPath: '/dist/',
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src'],
  },

  module: {
    loaders: [ {
      test:[/\.jsx$/,  /\.js$/],
      loaders: ['react-hot', 'babel?stage=0&loose[]=es6.modules'],
      include: [
        path.resolve(__dirname, "../src"),
        path.resolve(__dirname, "../node_modules/redux-form-validator"),
      ],
    }, {
      test: [/\.scss$/, /\.css$/],
      loader: 'css?localIdentName=[path]!postcss-loader!sass',
    }],
  },
  postcss: function() {
    return [autoprefixer({ browsers: ['last 2 versions', 'safari 5', 'ie 9', 'ios 6', 'android 4'] }), csswring];
  },
};
