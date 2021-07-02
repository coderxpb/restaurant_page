const path = require('path')
const mode =  process.env.NODE_ENV === 'production'?'production':'development'
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
	mode: mode,
	target: 'web',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname,'dist')
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				exclude: /node_modules/,
				type: 'asset/resource',
				generator: {
					filename: 'images/[hash][ext][query]'
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		],
	},
	// plugins: [
	// 	new ImageMinimizerPlugin({
	// 		minimizerOptions: {
	// 			plugins: [
	// 				["mozjpeg", { progressive: true, quality: 70 }],
	// 			],
	// 		}
			
	// 	})
	// ],

	devtool: 'source-map',
	devServer:{
		contentBase: './dist',
		watchContentBase: true
	}
}