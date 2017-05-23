<?php
namespace Carbon_Fields;

use Carbon_Fields\Helper\Helper;

# Define version constant
if ( ! defined( __NAMESPACE__ . '\VERSION' ) ) {
	$plugin_data = get_file_data( dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'carbon-fields-plugin.php', array('Version'=>'Version') );
	define( __NAMESPACE__ . '\VERSION', $plugin_data['Version'] );
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

# Initialize helper
global $carbon_fields_helper;
if ( ! isset( $carbon_fields_helper ) ) {
	$carbon_fields_helper = new Helper();
}
