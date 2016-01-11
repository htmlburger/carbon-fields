<?php
/*
Plugin Name: Carbon Fields
Description: WordPress developer-friendly custom fields for post types, taxonomy terms, users, comments, widgets, options and more.
Version: 1.0
Requires at least: 4.0
Tested up to: 4.4.1
*/

$dir = dirname( __FILE__ );

if ( file_exists( $dir . '/vendor/autoload.php' ) ) {
	require( $dir . '/vendor/autoload.php' );
} else {
	function carbon_fields_spl_autoload_register( $class ) {
		$prefix = 'Carbon_Fields';
		if ( stripos( $class, $prefix ) === false ) {
			return;
		}

		$file_path = dirname(__FILE__) . '/core/' . str_ireplace( 'Carbon_Fields\\', '', $class ) . '.php';
		include_once( $file_path );
	}

	spl_autoload_register( 'carbon_fields_spl_autoload_register' );
}

include_once( dirname( __FILE__ ) . '/carbon-fields.php' );