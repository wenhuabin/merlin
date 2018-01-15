var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var path = require('path')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
	rules: [{
	  "test": /\.scss$/,
	  "use": [
	      "vue-style-loader",
	      {
	        "loader": "css-loader",
	        "options": {
	          "minimize": false,
	          "sourceMap": false
	        }
	      },{
	        "loader": "sass-loader",
	        "options": {
	          "sourceMap": false
	        }
	      }]
	},{
      "test": /\.vue$/,
      "loader": 'vue-loader',
      "options": {
	      "loaders": {
	        "scss": [
	          "vue-style-loader",
	          {
	            "loader": "css-loader",
	            "options": {
	              "minimize": false,
	              "sourceMap": true
	            }
	          },{
	            "loader": "sass-loader",
	            "options": {
	              "sourceMap": true
	            }
	          }
	        ]
	      }
      }
	}]
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: '"development"'}
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    //new BundleAnalyzerPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: path.resolve(__dirname, '..', 'favicon.ico'),
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})
