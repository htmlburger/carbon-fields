var path = require('path');
var webpack = require('webpack');

module.exports = {
	// These are the "entry points" to our application.
	// This means they will be the "root" imports that are included in JS bundle.
	entry: {
		'carbon.app': [
			// Load the core library.
			'./assets/react/lib/constants.js',
			'./assets/react/lib/normalize.js',
			'./assets/react/lib/factory.js',
			'./assets/react/lib/events.js',

			// Load the containers.
			'./assets/react/containers/reducer.js',
			'./assets/react/containers/actions.js',
			'./assets/react/containers/selectors.js',
			'./assets/react/containers/constants.js',

			'./assets/react/containers/sagas/base.js',
			'./assets/react/containers/sagas/post-meta.js',

			'./assets/react/containers/hocs/with-connect-to-store.js',
			'./assets/react/containers/hocs/with-initial-side-effects.js',

			'./assets/react/containers/components/container.js',
			'./assets/react/containers/components/broken-container.js',
			'./assets/react/containers/components/post-meta-container.js',
			'./assets/react/containers/components/comment-meta-container.js',

			// Load the sidebars.
			'./assets/react/sidebars/reducer.js'
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
		loaders: [
			// Process JS with Babel.
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					// Enable caching results for faster rebuilds.
					cacheDirectory: true
				}
			}
		]
	},

	// Add aliases for easier importing of the modules.
	resolve: {
		root: __dirname,
		modulesDirectories: [
			'node_modules',
			'assets/react'
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

	// Faster sourcemaps without column mappings.
	// devtool: 'eval',

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
