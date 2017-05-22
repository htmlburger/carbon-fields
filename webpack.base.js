const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
	const base = {
		output: {
			path: path.resolve(__dirname, 'assets/dist/'),
			filename: '[name].js',
			library: '[name]',
			libraryTarget: 'this'
		},

		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					},
					exclude: /node_modules/
				}
			]
		},

		resolve: {
			modules: [
				path.resolve(__dirname, 'assets/js'),
				path.resolve(__dirname, 'assets/vendor'),
				'node_modules'
			]
		},

		externals: {
			'jquery': 'jQuery'
		},

		plugins: [
			new webpack.ProvidePlugin({
				'jQuery': 'jquery'
			}),

			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(env)
			})
		],

		devtool: 'cheap-source-map'
	};

	if (env === 'development') {
		base.cache = true;
	}

	if (env === 'production') {
		base.output.filename = '[name].min.js';

		base.plugins.push(new UglifyJSPlugin({
			compress: {
				warnings: false
			},
			sourceMap: true
		}));

		base.devtool = '#source-map';
	}

	return base;
};

module.exports.getNameWithSuffix = (file, env) => {
	const suffix = env === 'production' ? '.min' : '';
	const dir = path.dirname(file);
	const ext = path.extname(file);
	const name = `${path.basename(file, ext)}${suffix}`;

	return path.format({
		dir,
		name,
		ext
	});
};

module.exports.detectEnv = () => process.env.NODE_ENV || '';
