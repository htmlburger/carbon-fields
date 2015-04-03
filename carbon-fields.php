<?php
/*
Plugin Name: Carbon Fields
Description: Provides additional custom fields for posts, categories, users, widgets and more
Version: 0.4.2
Requires at least: 3.9
Tested up to: 3.9.1
*/

define('CARBON_PLUGIN_ROOT', dirname(__FILE__));

// define('CARBON_PLUGIN_URL', WP_PLUGIN_URL . '/' . basename(dirname(__FILE__)));
if (!defined('CARBON_PLUGIN_URL')) {
	define('CARBON_PLUGIN_URL', get_template_directory_uri() . '/lib/carbon-fields');	
}

do_action('carbon_before_include');

include_once 'Carbon_Exception.php';

include_once 'Carbon_DataStore.php';
include_once 'Carbon_Templater.php';

include_once 'Carbon_Container.php';
include_once 'Carbon_Container_CustomFields.php';
include_once 'Carbon_Container_ThemeOptions.php';
include_once 'Carbon_Container_TermMeta.php';
include_once 'Carbon_Container_UserMeta.php';
include_once 'Carbon_Container_Widget.php';

include_once 'Carbon_Field.php';
include_once 'Carbon_Field_Complex.php';

include_once 'Carbon_Widget.php';

include_once 'carbon-functions.php';

do_action('carbon_after_include');

# Add Actions
add_action('wp_loaded', 'carbon_trigger_fields_register');
add_action('carbon_after_register_fields', 'carbon_init_containers');
add_action('admin_footer', 'carbon_init_scripts', 0);
add_action('admin_print_footer_scripts', 'carbon_json', 999);