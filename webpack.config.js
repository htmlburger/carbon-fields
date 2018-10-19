module.exports = [
	...require( './bin/webpack.env') ,
	...require( './bin/webpack.core') ,
	...require( './bin/webpack.metaboxes') ,
	...require( './bin/webpack.gutenberg' )
];
