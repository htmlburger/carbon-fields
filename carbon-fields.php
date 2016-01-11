<?php
namespace Carbon_Fields;

use Carbon_Fields\Helper\Helper;

if ( ! defined( __NAMESPACE__ . '\DIR' ) ) {
	define( __NAMESPACE__ . '\DIR', dirname( __FILE__ ) );
}

if ( ! defined( __NAMESPACE__ . '\URL' ) ) {
	define( __NAMESPACE__ . '\URL', str_replace( '\\', '/', str_replace( untrailingslashit( ABSPATH ), site_url(), DIR ) ) );
}

# Initialize helper 
global $carbon_fields_helper;
if ( ! isset( $carbon_fields_helper ) ) {
	$carbon_fields_helper = new Helper();
}