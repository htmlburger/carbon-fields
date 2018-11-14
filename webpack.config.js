module.exports = [
	...require( './bin/webpack.vendor' ) ,
	...require( './bin/webpack.core' ) ,
	...require( './bin/webpack.metaboxes' ) ,
	...require( './bin/webpack.blocks' )
];
