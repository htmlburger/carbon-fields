module.exports = {
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
	stats: {
		modules: false,
		hash: false,
		builtAt: false
	}
};
