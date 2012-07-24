<?php
/*
Plugin Name: Enhanced Custom Fields
*/

define('EECF_PLUGIN_ROOT', dirname(__FILE__));
define('EECF_PLUGIN_URL', WP_PLUGIN_URL . '/' . basename(dirname(__FILE__)));

include_once 'EECF_Exception.php';

include_once 'EECF_DataStore.php';

include_once 'EECF_Container.php';
include_once 'EECF_Container_CustomFields.php';
include_once 'EECF_Container_ThemeOptions.php';
include_once 'EECF_Container_TaxonomyMeta.php';
include_once 'EECF_Container_UserMeta.php';

include_once 'EECF_Field.php';
include_once 'EECF_Field_Repeater.php';
include_once 'EECF_Field_Groups.php';

include_once 'EECF_Widget.php';

function eecf_on_activate() {
	EECF_DataStore_TaxonomyMeta::create_table();
}

register_activation_hook(__FILE__, 'eecf_on_activate');

