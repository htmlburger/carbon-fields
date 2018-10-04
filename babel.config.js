module.exports = {
	babelrcRoots: [
		'.',
		'./packages/*'
	],
	presets: [
		['@babel/preset-env', {
			modules: false
		}],
		['@babel/preset-react', {
			pragma: 'cf.element.createElement',
			pragmaFrag: 'cf.element.Fragment'
		}]
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-syntax-async-generators',
		'@babel/plugin-transform-runtime'
	]
};
