const path = require('path');

module.exports = {
	entry: {
		main: "./app/assets/scripts/main.js",
		vendor: "./app/assets/scripts/vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/assets/scripts"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["es2015"]
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	} 
}