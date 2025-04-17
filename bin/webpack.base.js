/**
 * External dependencies.
 */
const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );

/**
 * Indicates if we're running the build process in production mode.
 *
 * @type {Boolean}
 */
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	output: {
		filename: isProduction ? '[name].min.js' : '[name].js'
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
			filename: isProduction ? '[name].min.css' : '[name].css'
		} ),

		...(
			isProduction
			? [
				new OptimizeCssAssetsPlugin( {
					cssProcessorPluginOptions: {
						preset: [ 'default', { discardComments: { removeAll: true } } ]
					}
				} ),
				new TerserPlugin( {
					parallel: true
				} )
			]
			: []
		)
	],
	stats: {
		modules: false,
		hash: false,
		builtAt: false,
		children: false
	}
};
