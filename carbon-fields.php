<?php
/*
Plugin Name: Carbon Fields
Description: Provides additional custom fields for posts, categories, users, widgets and more
Version: 0.4.2
Requires at least: 3.9
Tested up to: 3.9.1
*/

namespace Carbon_Fields;

use Carbon_Fields\Templater\Templater;

define('CARBON_PLUGIN_ROOT', dirname(__FILE__));

if (!defined('CARBON_PLUGIN_URL')) {
	define('CARBON_PLUGIN_URL', get_template_directory_uri() . '/lib/carbon-fields');
}

include_once( CARBON_PLUGIN_ROOT . '/vendor/autoload.php' );

# Load custom functions
include_once( CARBON_PLUGIN_ROOT . '/core/functions.php' );

# Add Actions
add_action('wp_loaded', 'carbon_trigger_fields_register');
add_action('carbon_after_register_fields', 'carbon_init_containers');
add_action('admin_footer', 'carbon_init_scripts', 0);
add_action('admin_print_footer_scripts', 'carbon_json', 999);

# Initialize templater
$carbon_templater = new Templater();