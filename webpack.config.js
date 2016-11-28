module.exports = {
	// There are the "entry points" to our application.
	// This means they wll be the "root" import that are included in JS bundle.
	entry: [
		'babel-polyfill',
		'./assets/react/bootstrap.js'
	],

	// Setup the output.
	output: {
		// The output directory.
		path: 'assets/',

		// This is the JS bundle containing code from the entry points.
		filename: 'bundle.js'
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

	// Add aliases to allow easier importing of the modules.
	resolve: {
		root: __dirname,
		alias: {
			'lib': 'assets/react/lib',
			'containers': 'assets/react/containers',
			'sidebars': 'assets/react/sidebars',
			'store': 'assets/react/store.js',
			'defs': 'assets/react/defs.js'
		}
	},

	// Some of our dependencies are already loaded by WordPress.
	// So let's use them.
	externals: {
		'jquery': 'jQuery'
	},

	// Faster sourcemaps without column mappings.
	devtool: 'cheap-module-source-map'
};
