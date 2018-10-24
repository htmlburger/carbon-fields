/**
 * External dependencies.
 */
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	output: {
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
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: '[name].css'
		} )
	],
	stats: {
		modules: false,
		hash: false,
		builtAt: false
	}
};
