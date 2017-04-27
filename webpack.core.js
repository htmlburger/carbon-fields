const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const execa = require('execa');
const base = require('./webpack.base');
const OnBuildPlugin = require('on-build-webpack');

module.exports = (env) => {
	let bootstraped = false;

	const plugins = [
		new webpack.DllReferencePlugin({
			manifest: require(base.getNameWithSuffix('./assets/dist/carbon.vendor.json', env)),
			sourceType: 'this'
		}),

		new webpack.DllPlugin({
			name: '[name]',
			path: path.resolve(__dirname, base.getNameWithSuffix('assets/dist/[name].json', env))
		})
	];

	if (!env || env === 'development') {
		plugins.push(new OnBuildPlugin(() => {
			if (!bootstraped) {
				bootstraped = true;
				const child = execa('npm', ['run', 'js:boot', '--', '-w']);

				child.stdout.pipe(process.stdout);
				child.stderr.pipe(process.stderr);
			}
		}));
	}

	return merge(base(env), {
		entry: {
			'carbon.core': [
				'./assets/js/core.js',
			]
		},

		plugins,
	});
};
