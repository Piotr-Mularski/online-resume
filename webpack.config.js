const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const VENDOR_LIBS = ['lazysizes'];

module.exports = (env) => {
	const isProduction = env === 'production';
	return {
		resolve: {
			alias: {
				img: path.join(__dirname, 'src/img')
			}
		},
		entry: {
			bundle: ['babel-polyfill', './src/app.js'],
			vendor: VENDOR_LIBS
		},
		output: {
			path: path.join(__dirname, 'docs'),
			filename: '[name].js',
			publicPath: './'
		},
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			historyApiFallback: true,
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				},
				{
					test: /\.(css|scss)$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader!postcss-loader!sass-loader'
					})
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				},
				{
					test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
					exclude: /node_modules/,
					loader: 'url-loader',
					query: {
						limit: 1,
						name: './assets/images/[name].[ext]'
					}
				}
			]
		},
		devtool: isProduction ? 'source-maps' : 'inline-source-map',
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				names: ['vendor', 'manifest']
			}),
			new CleanWebpackPlugin(['dist']),
			new HtmlWebpackPlugin({ template: path.join(__dirname, 'src/index.html') }),
			new ExtractTextPlugin('[name].css'),
			new CopyWebpackPlugin([{ from: './src/img', to: 'assets/images' }, { from: './src/download', to: './assets/download' }])
		]
	};
};
