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
			'./assets/react/containers/sagas/term-meta.js',
			'./assets/react/containers/sagas/user-meta.js',
			'./assets/react/containers/sagas/theme-options.js',

			'./assets/react/containers/decorators/with-connect-to-store.js',
			'./assets/react/containers/decorators/with-initial-side-effects.js',

			'./assets/react/containers/components/container.js',
			'./assets/react/containers/components/broken-container.js',
			'./assets/react/containers/components/post-meta-container.js',
			'./assets/react/containers/components/comment-meta-container.js',
			'./assets/react/containers/components/user-meta-container.js',
			'./assets/react/containers/components/term-meta-container.js',
			'./assets/react/containers/components/theme-options-container.js',

			// Load the sidebars.
			'./assets/react/sidebars/reducer.js',

			// Load the fields.
			'./assets/react/fields/constants',
			'./assets/react/fields/selectors',
			'./assets/react/fields/decorators/hooks.js',
			'./assets/react/fields/decorators/connect-to-store.js',

			'./assets/react/fields/sagas/media-browser.js',

			'./assets/react/fields/components/field.js',
			'./assets/react/fields/components/file-field.js',
			'./assets/react/fields/components/text-field.js',
			'./assets/react/fields/components/textarea-field.js',
			'./assets/react/fields/components/separator-field.js',
			'./assets/react/fields/components/header-scripts-field.js',
			'./assets/react/fields/components/footer-scripts-field.js',
			'./assets/react/fields/components/color-field.js',
			'./assets/react/fields/components/checkbox-field.js',
			'./assets/react/fields/components/radio-field.js',
			'./assets/react/fields/components/select-field.js',
			'./assets/react/fields/components/set-field.js',

			'./assets/react/fields/components/no-options.js',

			// Load the store.
			'./assets/react/store.js'
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
	devtool: 'eval',

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
