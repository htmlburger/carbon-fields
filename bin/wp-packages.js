/**
 * The WordPress packages used across the code and exposed globally on `cf.vendor` variable.
 *
 * @type {string[]}
 */
module.exports.packages = [
	'@wordpress/compose',
	'@wordpress/element',
	'@wordpress/hooks',
	'@wordpress/data',
	'@wordpress/i18n'
];

/**
 * Get the packages as an external configuration.
 *
 * @type {string[]}
 */
module.exports.externals = module.exports.packages.reduce( ( externals, package ) => {
	externals[ package ] = [
		'wp',
		package.replace( '@wordpress/', '' )
	];

	return externals;
}, {} );

/**
 * Get the packages as an external configuration.
 * This variant is useful for the classic bundles where we
 * provide those dependencies manually.
 *
 * @type {string[]}
 */
module.exports.proxyExternals = module.exports.packages.reduce( ( externals, package ) => {
	externals[ package ] = [
		'cf',
		'vendor',
		package
	];

	return externals;
}, {} );

/**
 * Get the packages as a provider configuration.
 * The providers should be used in combination with `proxyExternals` configuration.
 *
 * @type {Object}
 */
module.exports.providers = module.exports.packages.reduce( ( providers, package ) => {
	providers[ module.exports.externals[ package ].join( '.' ) ] = package;

	return providers;
}, {} );
