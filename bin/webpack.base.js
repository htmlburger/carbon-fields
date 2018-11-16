/**
 * External dependencies.
 */
const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

console.log( path.resolve( __dirname, '../assets/styles' ) );

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
							importLoaders: 3
						}
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					},
					{
						loader: 'sass-resources-loader',
						options: {
							resources: path.resolve( __dirname, '../assets/styles/*.scss' )
						}
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
