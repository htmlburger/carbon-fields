var path = require('path');
var webpack = require('webpack');

module.exports = {
	// These are the "entry points" to our application.
	// This means they will be the "root" imports that are included in JS bundle.
	entry: {
		'carbon.core': [
			'./assets/react/core.js',
		]
	},

	// Setup the output.
	output: {
		// The output directory.
		path: 'assets/',

		// This is the JS bundle containing code from the entry points.
		filename: '[name].js',

		// The name of exported library.
		library: '[name]',

		// The output format.
		libraryTarget: 'this'
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

	// Add aliases for easier importing of the modules.
	resolve: {
		modules: [
			path.resolve(__dirname, 'assets/react'),
			'node_modules'
		]
	},

	// Some of our dependencies are already loaded by WordPress.
	// So let's use them.
	//
	// Add "jQuery" here because the DLL plugin doesn't support
	// externals and can't be added in the vendors DLL file.
	externals: {
		'jquery': 'jQuery'
	},

	// Setup the sourcemaps.
	devtool: 'cheap-module-source-map',

	// Setup the plugins.
	plugins: [
		// Use the vendor DLL file.
		new webpack.DllReferencePlugin({
			context: __dirname,
			sourceType: 'this',
			manifest: require('./assets/carbon.vendor.json'),
		}),

		// Output a DLL file to be used by third party developers.
		new webpack.DllPlugin({
			context: __dirname,
			path: path.join(__dirname, 'assets', '[name].json'),
			name: '[name]'
		}),
	],
};
