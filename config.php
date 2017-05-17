<?php

namespace Carbon_Fields;

# Define version constant
if ( ! defined( __NAMESPACE__ . '\VERSION' ) ) {
	define( __NAMESPACE__ . '\VERSION', '1.5.0' );
}

# Define root directory
if ( ! defined( __NAMESPACE__ . '\DIR' ) ) {
	define( __NAMESPACE__ . '\DIR', __DIR__ );
}

# Define root URL
if ( ! defined( __NAMESPACE__ . '\URL' ) ) {
	$url = \trailingslashit( DIR );
	$count = 0;

	# Sanitize directory separator on Windows
	$url = str_replace( '\\' ,'/', $url );

	$possible_locations = array(
		WP_PLUGIN_DIR => \plugins_url(), # If installed as a plugin
		WP_CONTENT_DIR => \content_url(), # If anywhere in wp-content
		ABSPATH => \site_url( '/' ), # If anywhere else within the WordPress installation
	);

	foreach ( $possible_locations as $test_dir => $test_url ) {
		$test_dir_normalized = str_replace( '\\' ,'/', $test_dir );
		$url = str_replace( $test_dir_normalized, $test_url, $url, $count );

		if ( $count > 0 ) {
			break;
		}
	}

	define( __NAMESPACE__ . '\URL', \untrailingslashit( $url ) );
}
