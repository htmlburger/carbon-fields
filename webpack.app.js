var path = require('path');
var webpack = require('webpack');

module.exports = {
	// These are the "entry points" to our application.
	// This means they will be the "root" imports that are included in JS bundle.
	entry: {
		'carbon.app': [
			// Load the core library.
			'./assets/react/lib/constants.js',
			'./assets/react/lib/events.js',
			'./assets/react/lib/factory.js',
			'./assets/react/lib/helpers.js',
			'./assets/react/lib/normalize.js',
			'./assets/react/lib/registry.js',

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
			'./assets/react/sidebars/actions.js',
			'./assets/react/sidebars/selectors.js',
			'./assets/react/sidebars/helpers.js',

			'./assets/react/sidebars/sagas/base.js',

			// Load the fields.
			'./assets/react/fields/reducer',
			'./assets/react/fields/actions',
			'./assets/react/fields/selectors',
			'./assets/react/fields/helpers',

			'./assets/react/fields/decorators/with-store.js',
			'./assets/react/fields/decorators/with-setup.js',

			'./assets/react/fields/sagas/media-browser.js',
			'./assets/react/fields/sagas/geocoder.js',
			'./assets/react/fields/sagas/complex.js',

			'./assets/react/fields/components/field',
			'./assets/react/fields/components/association',
			'./assets/react/fields/components/checkbox',
			'./assets/react/fields/components/color',
			'./assets/react/fields/components/complex',
			'./assets/react/fields/components/datetime',
			'./assets/react/fields/components/file',
			'./assets/react/fields/components/html',
			'./assets/react/fields/components/map',
			'./assets/react/fields/components/radio',
			'./assets/react/fields/components/rich-text',
			'./assets/react/fields/components/select.js',
			'./assets/react/fields/components/separator.js',
			'./assets/react/fields/components/set.js',
			'./assets/react/fields/components/sidebar.js',
			'./assets/react/fields/components/text.js',
			'./assets/react/fields/components/textarea.js',

			'./assets/react/fields/components/no-options',
			'./assets/react/fields/components/search-input',

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
