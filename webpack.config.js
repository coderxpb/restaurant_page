const path = require('path')
const mode =  process.env.NODE_ENV === 'production'?'production':'development'

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
		],
	},

	devtool: 'source-map',
	devServer:{
		contentBase: './dist',
		watchContentBase: true
	}
}