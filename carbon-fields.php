<?php
/*
Plugin Name: Carbon Fields
Description: Provides additional custom fields for posts, categories, users, widgets and more
Version: 0.1
*/

define('CARBON_IS_PLUGIN', true);
define('CARBON_PLUGIN_ROOT', dirname(__FILE__));

if ( CARBON_IS_PLUGIN ) {
	define('CARBON_PLUGIN_URL', WP_PLUGIN_URL . '/' . basename(dirname(__FILE__)));
} else {
	define('CARBON_PLUGIN_URL', get_template_directory_uri() . '/lib/carbon-fields');
}

include_once 'Carbon_Exception.php';

include_once 'Carbon_DataStore.php';

include_once 'Carbon_Container.php';
include_once 'Carbon_Container_CustomFields.php';
include_once 'Carbon_Container_ThemeOptions.php';
include_once 'Carbon_Container_TaxonomyMeta.php';
include_once 'Carbon_Container_UserMeta.php';

include_once 'Carbon_Field.php';
include_once 'Carbon_Field_Complex.php';

include_once 'Carbon_Widget.php';

include_once 'carbon-functions.php';

