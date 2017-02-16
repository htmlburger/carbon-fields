var path = require('path');
var webpack = require('webpack');

module.exports = {
	// These are the "entry points" to our application.
	// This means they will be the "root" imports that are included in JS bundle.
	entry: './assets/react/bootstrap.js',

	// Setup the output.
	output: {
		// The output directory.
		path: 'assets/',

		// This is the JS bundle containing code from the entry points.
		filename: 'carbon.bootstrap.js',
	},

	// Setup the transformation of the modules.
	module: {
		rules: [
			// Process JS with Babel.
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					// Enable caching results for faster rebuilds.
					cacheDirectory: true
				},
				exclude: /node_modules/
			}
		]
	},

	// Add aliases to allow easier importing of the modules.
	resolve: {
		modules: [
			path.resolve(__dirname, 'assets/react'),
			'node_modules'
		]
	},

	// Setup the source maps.
	devtool: 'cheap-module-source-map',

	// Setup the plugins.
	plugins: [
		// Use the vendor DLL file.
		new webpack.DllReferencePlugin({
			context: __dirname,
			sourceType: 'this',
			manifest: require('./assets/carbon.vendor.json'),
		}),

		// Use the core DLL file.
		new webpack.DllReferencePlugin({
			context: __dirname,
			sourceType: 'this',
			manifest: require('./assets/carbon.core.json'),
		})
	],
};
