const path = require('path')
const mode =  process.env.NODE_ENV === 'production'?'production':'development'

module.exports = {
	mode: mode,
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname,'dist')
	},
	
	devtool: 'source-map',
	devServer:{
		contentBase: './dist'
	}
}