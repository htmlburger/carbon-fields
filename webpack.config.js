const path = require('path');

module.exports = {
	entry: {
		'carbon.gutenberg': './assets/js/gutenberg/index.js'
	},

	output: {
		path: path.resolve(__dirname, 'assets/dist/js'),
		filename: '[name].js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				}
			}
		]
	},

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		'jquery': 'jQuery',
		'lodash': 'lodash'
	}
};
