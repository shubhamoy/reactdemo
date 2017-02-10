let webpack = require('webpack');
let path = require('path');
module.exports = {
  entry: ['babel-polyfill', './source/client.js'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/')
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false,
        drop_console: true
      }
    })
  ],
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }
   ]
 }
};
/*
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000,
    host: '0.0.0.0'
  },
*/