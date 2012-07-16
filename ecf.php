<?php
/*
Plugin Name: Enhanced Custom Fields
*/

include_once 'EECF_DataStore.php';
include_once 'EECF_Container.php';
include_once 'EECF_Field.php';
include_once 'EECF_Field_Repeater.php';
include_once 'EECF_Field_Groups.php';

/* EXAMPLE */

$custom_fields_panel = new EECF_Container_CustomFields('Custom Fields Panel');
$custom_fields_panel->setup(array(
	'post_type'=>'post'
));
$custom_fields_panel->add_fields(array(
	EECF_Field::factory('text', 'img'),
	EECF_Field::factory('text', 'pdf'),
));

/* Repeater */
$custom_fields_panel->add_fields(array(
	EECF_Field::factory('repeater', 'slideshow')->add_fields(array(
		EECF_Field::factory('text', 'title'),
		EECF_Field::factory('text', 'img_src'),
	)),
	EECF_Field::factory('groups', 'content')->add_fields(array(
			EECF_Field::factory('text', 'excerpt'),
			EECF_Field::factory('text', 'photo'),
		), 'photo')->add_fields(array(
			EECF_Field::factory('text', 'label'),
			EECF_Field::factory('text', 'video'),
		), 'video'),
));
