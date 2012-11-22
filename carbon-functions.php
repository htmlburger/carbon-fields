<?php

function carbon_trigger_fields_register() {
	do_action('carbon_register_fields');
	do_action('carbon_after_register_fields');
}

function carbon_init_containers() {
	Carbon_Container::init_containers();
}

function carbon_get_post_meta($id, $name = null, $type = null) {
	if ( !is_numeric($id) ) {
		$type = $name;
		$name = $id;
		$id = get_the_id();
	}

	if ( $type == 'complex' ) {
		return carbon_get_complex_fields('CustomField', '_' . $name, $id);
	}

	return get_post_meta($id, '_' . $name, true);
}

function carbon_get_theme_option($name = null, $type = null) {
	if ( $type == 'complex' ) {
		return carbon_get_complex_fields('ThemeOptions', $name);
	}

	return get_option($name, true);
}

function carbon_get_complex_fields($type, $name, $id = null) {
	$datastore = Carbon_DataStore_Base::factory($type);
	
	if ( $id ) {
		$datastore->set_post_id($id);
	}

	$group_rows = $datastore->load_values($name);
	$input_groups = array();

	foreach ($group_rows as $row) {
		if ( !preg_match('~^' . preg_quote($name, '~') . '_(?P<group>\w*)-_?(?P<key>.*)_(?P<index>\d+)_?(?P<sub>\w+)?$~', $row['field_key'], $field_name) ) {
			continue;
		}
		
		$row['field_value'] = maybe_unserialize($row['field_value']);

		if ( !empty($field_name['sub']) ) {
			$input_groups[ $field_name['index'] ]['_type'] = $field_name['group'];
			$input_groups[ $field_name['index'] ][ $field_name['key'] ][$field_name['sub'] ] = $row['field_value'];
		} else {
			$input_groups[ $field_name['index'] ]['_type'] = $field_name['group'];
			$input_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
		}
	}

	// create groups list with loaded fields
	ksort($input_groups);

	return $input_groups;
}

