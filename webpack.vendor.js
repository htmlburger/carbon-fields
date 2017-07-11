const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');

module.exports = () => {
	const env = base.detectEnv();

	return merge(base(env), {
		entry: {
			'carbon.vendor': [
				'react',
				'react-dom',
				'react-color',
				'react-redux',
				'redux',
				'redux-saga',
				'redux-saga/effects',
				'redux-actions',
				'reselect',
				'recompose',
				'lodash',
				'object-path-immutable',
				'classnames',
				'react-onclickoutside',
				'react-flatpickr',
				'jquery-bind-first',
				'locutus/php/url/urldecode'
			]
		},

		plugins: [
			new webpack.DllPlugin({
				name: '[name]',
				path: path.resolve(__dirname, base.getNameWithSuffix('assets/dist/[name].json', env))
			}),

			new webpack.HashedModuleIdsPlugin()
		]
	});
}
