const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    // entry point of our app
    path.join(__dirname, './client/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: process.env_NODE_ENV,
  module:{
    rules:[
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { targets: 'defaults' }],
            ]
          }
    
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './build'),
      publicPath: '/'
    },
    proxy: {'/': 'http://localhost:3000'}, 
    port: 8080
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: './index.html'
  })]
}

