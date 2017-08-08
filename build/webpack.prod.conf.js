var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var	CleanWebpackPlugin = require('clean-webpack-plugin')
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [{
	  	"test": /\.scss$/,
	    "use": [{
	        "loader": path.resolve(__dirname, '../node_modules/extract-text-webpack-plugin/loader.js'),
	        "options": {
	          "omit": 1,
	          "remove": true
	        }
	    },{
	      	"loader": "vue-style-loader"
	    },{
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
	    }]
	},{
        "test": /\.vue$/,
        "loader": 'vue-loader',
        "options": {
			"loaders": {
			    "scss": [{
	        	  "loader": path.resolve(__dirname, '../node_modules/extract-text-webpack-plugin/loader.js'),
			      "options": {
			        "omit": 1,
			        "remove": true
			      }
			  },{
			      "loader": "vue-style-loader"
			  },{
			    "loader": "css-loader",
			    "options": {
			        "minimize": true,
			        "sourceMap": false
			    }
			  },{
			    "loader": "sass-loader",
			    "options": {
			      	"sourceMap": false
			    }
			  }
			]}
		}
    }]
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:8].js',
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: '"production"'}
    }),
	new CleanWebpackPlugin(['dist'],{
		root: path.resolve(__dirname, '../'),
		verbose: true,
		dry: false
	}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false 
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 'css/[id].[chunkhash].css'
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'vue.html',
      template: path.resolve(__dirname, '../index.html'),
      favicon: path.resolve(__dirname, '..', 'favicon.ico'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    }),
  ]
})

//webpackConfig.plugins.push(new BundleAnalyzerPlugin())

module.exports = webpackConfig
