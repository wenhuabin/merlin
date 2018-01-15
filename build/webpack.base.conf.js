var path = require('path')
var webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'scss': resolve('src/assets/scss'),
      'data': resolve('src/assets/data'),
      'imgs': resolve('src/assets/imgs'),
      'icons': resolve('src/assets/icons'),
      'utils': resolve('src/utils'),
      'components': resolve('src/components'),
      'store': resolve('src/store'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },{
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/vue-echarts')]
      },{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
      	  name: 'imgs/[name].[hash:8].[ext]'
        }
      },{
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
      	  name: 'fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
	new webpack.ProvidePlugin({
		fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    //new webpack.optimize.CommonsChunkPlugin({
    //  name: 'vendor',
    //  minChunks: 4,
    //}),
  ]
}
