<?php

if ( !function_exists('carbon_trigger_fields_register') ) :

function carbon_trigger_fields_register() {
	try {
		do_action('carbon_register_fields');
		do_action('carbon_after_register_fields');	
	} catch (Carbon_Exception $e) {
		$callback = '';
		foreach ($e->getTrace() as $trace) {
			$callback .= '<br/>' . (isset($trace['file']) ? $trace['file'] . ':' . $trace['line'] : $trace['function'] . '()');
		}
		wp_die( '<h3>' . $e->getMessage() . '</h3><small>' . $callback . '</small>' );
	}
}

endif;


if ( !function_exists('carbon_init_containers') ) :

function carbon_init_containers() {
	Carbon_Container::init_containers();
}

endif;


if ( !function_exists('carbon_init_scripts') ) :

function carbon_init_scripts() {
	crb_enqueue_script('carbon-app', CARBON_PLUGIN_URL . '/js/app.js', array('jquery', 'backbone', 'underscore', 'jquery-touch-punch', 'jquery-ui-sortable'));
	crb_enqueue_script('carbon-ext', CARBON_PLUGIN_URL . '/js/ext.js', array('carbon-app'));

	$active_fields = Carbon_Container::get_active_fields();
	$active_field_types = array();

	foreach ($active_fields as $field) {
		if (in_array($field->type, $active_field_types)) {
			continue;
		}

		$active_field_types[] = $field->type;

		$field->admin_enqueue_scripts();
	}
}

endif;

if ( !function_exists('carbon_json') ) :

function carbon_json() {
	$json_data = carbon_get_json_data();

	if (wp_script_is('carbon-app', 'enqueued')) {
		$json_data_encoded = function_exists('wp_json_encode') ? wp_json_encode($json_data) : json_encode($json_data);
		?>
		<script>
			/* <![CDATA[ */
			var carbon_json = <?php echo $json_data_encoded; ?>;
			/* ]]> */
		</script>
		<?php
	}
}

endif;

if ( !function_exists('carbon_get_json_data') ) :

function carbon_get_json_data() {
	$containers = Carbon_Container::get_active_containers();

	$carbon_data = array(
		'containers' => array(),
	);

	foreach ($containers as $container) {
		$container_data = $container->to_json(true);

		$carbon_data['containers'][] = $container_data;
	}

	return $carbon_data;
}

endif;


if ( !function_exists('carbon_get_post_meta') ) :

function carbon_get_post_meta($id, $name, $type = null) {
	$name = $name[0] == '_' ? $name : '_' . $name;

	switch ($type) {
		case 'complex':
			$value = carbon_get_complex_fields('CustomField', $name, $id);
		break;

		case 'map':
		case 'map_with_address':
			$value =  array(
				'lat' => (float) get_post_meta($id, $name . '-lat', true),
				'lng' => (float) get_post_meta($id, $name . '-lng', true),
				'address' => get_post_meta($id, $name . '-address', true),
				'zoom' => (int) get_post_meta($id, $name . '-zoom', true),
			);
		break;

		case 'association':
			$raw_value = get_post_meta($id, $name, true);
			$value = carbon_parse_relationship_field($raw_value, $type);
		break;

		default:
			$value = get_post_meta($id, $name, true);

			// backward compatibility for the old Relationship field
			$value = crb_maybe_old_relationship_field($value);
	}

	return $value;
}

endif;


if ( !function_exists('carbon_get_the_post_meta') ) :

function carbon_get_the_post_meta($name, $type = null) {
	return carbon_get_post_meta(get_the_ID(), $name, $type);
}

endif;


if ( !function_exists('carbon_get_theme_option') ) :

function carbon_get_theme_option($name, $type = null) {
	switch ($type) {
		case 'complex':
			$value = carbon_get_complex_fields('ThemeOptions', $name);
		break;

		case 'map':
		case 'map_with_address':
			$value =  array(
				'lat' => (float) get_option($name . '-lat'),
				'lng' => (float) get_option($name . '-lng'),
				'address' => get_option($name . '-address'),
				'zoom' => (int) get_option($name . '-zoom'),
			);
		break;

		case 'association':
			$raw_value = get_option($name);
			$value = carbon_parse_relationship_field($raw_value, $type);
		break;

		default:
			$value = get_option($name);

			// backward compatibility for the old Relationship field
			$value = crb_maybe_old_relationship_field($value);
	}

	return $value;
}

endif;


if ( !function_exists('carbon_get_term_meta') ) :

function carbon_get_term_meta($id, $name, $type = null) {
	$name = $name[0] == '_' ? $name: '_' . $name;

	switch ($type) {
		case 'complex':
			$value = carbon_get_complex_fields('TermMeta', $name, $id);
		break;

		case 'map':
		case 'map_with_address':
			$value =  array(
				'lat' => (float) get_metadata('term', $id, $name . '-lat', true),
				'lng' => (float) get_metadata('term', $id, $name . '-lng', true),
				'address' => get_metadata('term', $id, $name . '-address', true),
				'zoom' => (int) get_metadata('term', $id, $name . '-zoom', true),
			);
		break;

		case 'association':
			$raw_value = get_metadata('term', $id, $name, true);
			$value = carbon_parse_relationship_field($raw_value, $type);
		break;

		default:
			$value = get_metadata('term', $id, $name, true);

			// backward compatibility for the old Relationship field
			$value = crb_maybe_old_relationship_field($value);
	}

	return $value;
}

endif;


if ( !function_exists('carbon_get_user_meta') ) :

function carbon_get_user_meta($id, $name, $type = null) {
	$name = $name[0] == '_' ? $name: '_' . $name;

	switch ($type) {
		case 'complex':
			$value = carbon_get_complex_fields('UserMeta', $name, $id);
		break;

		case 'map':
		case 'map_with_address':
			$value =  array(
				'lat' => (float) get_metadata('user', $id, $name . '-lat', true),
				'lng' => (float) get_metadata('user', $id, $name . '-lng', true),
				'address' => get_metadata('user', $id, $name . '-address', true),
				'zoom' => (int) get_metadata('user', $id, $name . '-zoom', true),
			);
		break;

		case 'association':
			$raw_value = get_metadata('user', $id, $name, true);
			$value = carbon_parse_relationship_field($raw_value, $type);
		break;

		default:
			$value = get_metadata('user', $id, $name, true);

			// backward compatibility for the old Relationship field
			$value = crb_maybe_old_relationship_field($value);
	}

	return $value;
}

endif;


if ( !function_exists('carbon_get_complex_fields') ) :

function carbon_get_complex_fields($type, $name, $id = null) {
	$datastore = Carbon_DataStore_Base::factory($type);
	
	if ( $id ) {
		$datastore->set_id($id);
	}

	$group_rows = $datastore->load_values($name);
	$input_groups = array();

	foreach ($group_rows as $row) {
		if ( !preg_match('~^' . preg_quote($name, '~') . '(?P<group>\w*)-_?(?P<key>.*?)_(?P<index>\d+)_?(?P<sub>\w+)?(-(?P<trailing>.*))?$~', $row['field_key'], $field_name) ) {
				continue;
		}
		
		$row['field_value'] = maybe_unserialize($row['field_value']);

		// backward compatibility for Relationship field
		$row['field_value'] = carbon_parse_relationship_field($row['field_value']);

		$input_groups[ $field_name['index'] ]['_type'] = $field_name['group'];
		if ( !empty($field_name['trailing']) ) {
			$input_groups = carbon_expand_nested_field($input_groups, $row, $field_name);
		} else if ( !empty($field_name['sub']) ) {
			$input_groups[ $field_name['index'] ][ $field_name['key'] ][$field_name['sub'] ] = $row['field_value'];
		} else {
			$input_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
		}
	}

	// create groups list with loaded fields
	ksort($input_groups);

	return $input_groups;
}

endif;


if ( !function_exists('carbon_expand_nested_field') ) :

function carbon_expand_nested_field($input_groups, $row, $field_name) {
	if ( !preg_match('~^' . preg_quote($field_name['key'], '~') . '(?P<group>\w*)-_?(?P<key>.*?)_(?P<index>\d+)_?(?P<sub>\w+)?(-(?P<trailing>.*))?$~', $field_name['key'] . '_' . $field_name['sub'] . '-' . $field_name['trailing'], $subfield_name) ) {
		return $input_groups;
	}

	$input_groups[ $field_name['index'] ][$field_name['key']][ $subfield_name['index'] ]['_type'] = $subfield_name['group'];

	if ( !empty($subfield_name['trailing']) ) {
		$input_groups[ $field_name['index'] ][$field_name['key']] = carbon_expand_nested_field($input_groups[ $field_name['index'] ][$field_name['key']], $row, $subfield_name);
	} else if ( !empty($subfield_name['sub']) ) {
		$input_groups[ $field_name['index'] ][$field_name['key']][ $subfield_name['index'] ][$subfield_name['key']][$subfield_name['sub']] = $row['field_value'];
	} else {
		$input_groups[ $field_name['index'] ][$field_name['key']][ $subfield_name['index'] ][$subfield_name['key']] = $row['field_value'];
	}

	return $input_groups;
}

endif;

if ( !function_exists('carbon_parse_relationship_field') ) :

function carbon_parse_relationship_field($raw_value = '', $type = '') {
	if ($raw_value && is_array($raw_value)) {
		$value = array();
		foreach ($raw_value as $raw_value_item) {
			if (strpos($raw_value_item, ':') !== false) {
				$item_data = explode(':', $raw_value_item);
				$item = array(
					'id' => $item_data[2],
					'type' => $item_data[0],
				);

				if ($item_data[0] === 'post') {
					$item['post_type'] = $item_data[1];
				} elseif ($item_data[0] === 'taxonomy') {
					$item['taxonomy'] = $item_data[1];
				}

				$value[] = $item;
			} elseif ( $type === 'association' ) {
				$value[] = array(
					'id' => $raw_value_item,
					'type' => 'post',
					'post_type' => get_post_type($raw_value_item),
				);
			} else {
				$value[] = $raw_value_item;
			}
		}

		$raw_value = $value;
	}

	return $raw_value;
}

endif;

if ( !function_exists('crb_maybe_old_relationship_field') ) :

function crb_maybe_old_relationship_field($value) {
	if (is_array($value) && !empty($value)) {
		if (preg_match('~^\w+:\w+:\d+$~', $value[0])) {
			$new_value = array();
			foreach ($value as $value_entry) {
				$pieces = explode(':', $value_entry);
				$new_value[] = $pieces[2];
			}
			$value = $new_value;
		}
	}

	return $value;
}

endif;