module.exports = {
	presets: [
		[ '@babel/preset-env', {
			modules: false
		} ],
		[ '@babel/preset-react', {
			pragma: 'wp.element.createElement',
			pragmaFrag: 'wp.element.Fragment'
		} ]
	],
	plugins: [
		["add-module-exports", {
			"addDefaultProperty": true
		  }],
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-transform-optional-chaining',
		// ['@babel/plugin-transform-modules-commonjs', {
		// 	importInterop: "babel"
		// }],
		'@babel/plugin-syntax-async-generators',
		'@babel/plugin-transform-runtime'
	],
	env: {
		production: {
			plugins: [
				[ '@wordpress/babel-plugin-makepot', {
					output: 'languages/carbon-fields-ui.pot'
				} ]
			]
		}
	}
};
