<?php

namespace Carbon_Fields;

# Define version constant
if ( ! defined( __NAMESPACE__ . '\VERSION' ) ) {
	$json = @unserialize( file_get_contents( __DIR__ . DIRECTORY_SEPARATOR . 'package.json' ) );
	$version = $json ? $json['version'] : '1.0.0';
	define( __NAMESPACE__ . '\VERSION', $version );
}

# Define root directory
if ( ! defined( __NAMESPACE__ . '\DIR' ) ) {
	define( __NAMESPACE__ . '\DIR', __DIR__ );
}

# Define version constant
if ( ! defined( __NAMESPACE__ . '\TEXT_DOMAIN' ) ) {
	define( __NAMESPACE__ . '\TEXT_DOMAIN', 'carbon-fields' );
}

# Define root URL
if ( ! defined( __NAMESPACE__ . '\URL' ) ) {
	$url = \trailingslashit( DIR );
	$count = 0;

	# Sanitize directory separator on Windows
	$url = str_replace( '\\' ,'/', $url );

	# If installed as a plugin
	$wp_plugin_dir = str_replace( '\\' ,'/', WP_PLUGIN_DIR );
	$url = str_replace( $wp_plugin_dir, \plugins_url(), $url, $count );

	if ( $count < 1 ) {
		# If anywhere in wp-content
		$wp_content_dir = str_replace( '\\' ,'/', WP_CONTENT_DIR );
		$url = str_replace( $wp_content_dir, \content_url(), $url, $count );
	}

	if ( $count < 1 ) {
		# If anywhere else within the WordPress installation
		$wp_dir = str_replace( '\\' ,'/', ABSPATH );
		$url = str_replace( $wp_dir, \site_url( '/' ), $url );
	}

	define( __NAMESPACE__ . '\URL', \untrailingslashit( $url ) );
}
