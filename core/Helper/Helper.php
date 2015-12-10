<?php

namespace Carbon_Fields\Helper;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Container\Container;
use Carbon_Fields\Templater\Templater;
use Carbon_Fields\Manager\Sidebar_Manager;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Helper {

	public function __construct() {
		add_action('wp_loaded', array($this, 'trigger_fields_register'));
		add_action('carbon_after_register_fields', array($this, 'init_containers'));
		add_action('admin_footer', array($this, 'init_scripts'), 0);
		add_action('crb_field_activated', array($this, 'add_templates'));
		add_action('crb_container_activated', array($this, 'add_templates'));

		# Initialize templater
		$carbon_templater = new Templater();

		# Initialize sidebar manager
		Sidebar_Manager::instance();
	}

	public function trigger_fields_register() {
		try {
			do_action('carbon_register_fields');
			do_action('carbon_after_register_fields');	
		} catch (Incorrect_Syntax_Exception $e) {
			$callback = '';
			foreach ($e->getTrace() as $trace) {
				$callback .= '<br/>' . (isset($trace['file']) ? $trace['file'] . ':' . $trace['line'] : $trace['function'] . '()');
			}
			wp_die( '<h3>' . $e->getMessage() . '</h3><small>' . $callback . '</small>' );
		}
	}

	public function init_containers() {
		Container::init_containers();
	}

	public function init_scripts() {
		wp_enqueue_script('carbon-app', URL . '/assets/js/app.js', array('jquery', 'backbone', 'underscore', 'jquery-touch-punch', 'jquery-ui-sortable'));
		wp_enqueue_script('carbon-ext', URL . '/assets/js/ext.js', array('carbon-app'));

		wp_localize_script('carbon-app', 'carbon_json', $this->get_json_data());

		$active_fields = Container::get_active_fields();
		$active_field_types = array();

		foreach ($active_fields as $field) {
			if (in_array($field->type, $active_field_types)) {
				continue;
			}

			$active_field_types[] = $field->type;

			$field->admin_enqueue_scripts();
		}
	}

	public function get_json_data() {
		global $wp_registered_sidebars;

		$carbon_data = array(
			'containers' => array(),
			'sidebars' => array(),
		);

		$containers = Container::get_active_containers();

		foreach ($containers as $container) {
			$container_data = $container->to_json(true);

			$carbon_data['containers'][] = $container_data;
		}

		foreach ($wp_registered_sidebars as $sidebar) {
			// Check if we have inactive sidebars
			if (isset($sidebar['class']) && strpos($sidebar['class'], 'inactive-sidebar') !== false) {
				continue;
			}

			$carbon_data['sidebars'][] = array(
				'name' => $sidebar['name'],
			);
		}

		return $carbon_data;
	}

	public static function get_post_meta($id, $name, $type = null) {
		$name = $name[0] == '_' ? $name : '_' . $name;

		switch ($type) {
			case 'complex':
				$value = self::get_complex_fields('Post_Meta', $name, $id);
			break;

			case 'map':
			case 'map_with_address':
				$value =  array(
					'lat' => (float) get_post_meta($id, $name . '-lat', true),
					'lng' => (float) get_post_meta($id, $name . '-lng', true),
					'address' => get_post_meta($id, $name . '-address', true),
					'zoom' => (int) get_post_meta($id, $name . '-zoom', true),
				);
				
				if ( !array_filter($value) ) {
					$value = array();
				}
			break;

			case 'association':
				$raw_value = get_post_meta($id, $name, true);
				$value = self::parse_relationship_field($raw_value, $type);
			break;

			default:
				$value = get_post_meta($id, $name, true);

				// backward compatibility for the old Relationship field
				$value = self::maybe_old_relationship_field($value);
		}

		return $value;
	}

	public static function get_the_post_meta($name, $type = null) {
		return self::get_post_meta(get_the_ID(), $name, $type);
	}

	public static function get_theme_option($name, $type = null) {
		switch ($type) {
			case 'complex':
				$value = self::get_complex_fields('Theme_Options', $name);
			break;

			case 'map':
			case 'map_with_address':
				$value =  array(
					'lat' => (float) get_option($name . '-lat'),
					'lng' => (float) get_option($name . '-lng'),
					'address' => get_option($name . '-address'),
					'zoom' => (int) get_option($name . '-zoom'),
				);

				if ( !array_filter($value) ) {
					$value = array();
				}
			break;

			case 'association':
				$raw_value = get_option($name);
				$value = self::parse_relationship_field($raw_value, $type);
			break;

			default:
				$value = get_option($name);

				// backward compatibility for the old Relationship field
				$value = self::maybe_old_relationship_field($value);
		}

		return $value;
	}

	public static function get_term_meta($id, $name, $type = null) {
		$name = $name[0] == '_' ? $name: '_' . $name;

		switch ($type) {
			case 'complex':
				$value = self::get_complex_fields('Term_Meta', $name, $id);
			break;

			case 'map':
			case 'map_with_address':
				$value =  array(
					'lat' => (float) get_metadata('term', $id, $name . '-lat', true),
					'lng' => (float) get_metadata('term', $id, $name . '-lng', true),
					'address' => get_metadata('term', $id, $name . '-address', true),
					'zoom' => (int) get_metadata('term', $id, $name . '-zoom', true),
				);

				if ( !array_filter($value) ) {
					$value = array();
				}
			break;

			case 'association':
				$raw_value = get_metadata('term', $id, $name, true);
				$value = self::parse_relationship_field($raw_value, $type);
			break;

			default:
				$value = get_metadata('term', $id, $name, true);

				// backward compatibility for the old Relationship field
				$value = self::maybe_old_relationship_field($value);
		}

		return $value;
	}

	public static function get_user_meta($id, $name, $type = null) {
		$name = $name[0] == '_' ? $name: '_' . $name;

		switch ($type) {
			case 'complex':
				$value = self::get_complex_fields('User_Meta', $name, $id);
			break;

			case 'map':
			case 'map_with_address':
				$value =  array(
					'lat' => (float) get_metadata('user', $id, $name . '-lat', true),
					'lng' => (float) get_metadata('user', $id, $name . '-lng', true),
					'address' => get_metadata('user', $id, $name . '-address', true),
					'zoom' => (int) get_metadata('user', $id, $name . '-zoom', true),
				);

				if ( !array_filter($value) ) {
					$value = array();
				}
			break;

			case 'association':
				$raw_value = get_metadata('user', $id, $name, true);
				$value = self::parse_relationship_field($raw_value, $type);
			break;

			default:
				$value = get_metadata('user', $id, $name, true);

				// backward compatibility for the old Relationship field
				$value = self::maybe_old_relationship_field($value);
		}

		return $value;
	}

	/**
	 * Adds the field/container template(s) to the templates stack.
	 *
	 * @param object $object field or container object
	 * @return void
	 **/
	public function add_templates($object) {
		$templates = $object->get_templates();

		if (!$templates) {
			return false;
		}

		foreach ($templates as $name => $callback) {
			ob_start();

			call_user_func($callback);

			$html = ob_get_clean();

			// Add the template to the stack
			Templater::add_template($name, $html);
		}
	}

	public static function preg_quote_array( $pieces, $glue = '|' ) {
		$pieces = array_map('preg_quote', $pieces, array('~'));
		
		return implode($glue, $pieces);
	}

	public static function get_complex_field_regex( $field_name, $group_names = array(), $field_names = array() ) {
		if ( $group_names ) {
			$group_regex = self::preg_quote_array( $group_names );
		} else {
			$group_regex = '\w*';
		}

		if ( $field_names ) {
			$field_regex = self::preg_quote_array( $field_names );
		} else {
			$field_regex = '.*?';
		}

		return '~^' . preg_quote($field_name, '~') . '(?P<group>' . $group_regex . ')-_?(?P<key>' . $field_regex . ')_(?P<index>\d+)_?(?P<sub>\w+)?(-(?P<trailing>.*))?$~';
	}

	public static function get_complex_fields($type, $name, $id = null) {
		$datastore = Datastore::factory($type);
		
		if ( $id ) {
			$datastore->set_id($id);
		}

		$group_rows = $datastore->load_values($name);
		$input_groups = array();

		foreach ($group_rows as $row) {
			if ( !preg_match( self::get_complex_field_regex($name), $row['field_key'], $field_name ) ) {
					continue;
			}
			
			$row['field_value'] = maybe_unserialize($row['field_value']);

			// backward compatibility for Relationship field
			$row['field_value'] = self::parse_relationship_field($row['field_value']);

			$input_groups[ $field_name['index'] ]['_type'] = $field_name['group'];
			if ( !empty($field_name['trailing']) ) {
				$input_groups = self::expand_nested_field($input_groups, $row, $field_name);
			} else if ( !empty($field_name['sub']) ) {
				$input_groups[ $field_name['index'] ][ $field_name['key'] ][$field_name['sub'] ] = $row['field_value'];
			} else {
				$input_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
			}
		}

		// create groups list with loaded fields
		self::ksort_recursive($input_groups);

		return $input_groups;
	}

	public static function expand_nested_field($input_groups, $row, $field_name) {
		$subfield_key_token = $field_name['key'] . '_' . $field_name['sub'] . '-' . $field_name['trailing'];
		if ( !preg_match( self::get_complex_field_regex($field_name['key']), $subfield_key_token, $subfield_name ) ) {
			return $input_groups;
		}

		$input_groups[ $field_name['index'] ][$field_name['key']][ $subfield_name['index'] ]['_type'] = $subfield_name['group'];

		if ( !empty($subfield_name['trailing']) ) {
			$input_groups[ $field_name['index'] ][$field_name['key']] = self::expand_nested_field($input_groups[ $field_name['index'] ][$field_name['key']], $row, $subfield_name);
		} else if ( !empty($subfield_name['sub']) ) {
			$input_groups[ $field_name['index'] ][$field_name['key']][ $subfield_name['index'] ][$subfield_name['key']][$subfield_name['sub']] = $row['field_value'];
		} else {
			$input_groups[ $field_name['index'] ][$field_name['key']][ $subfield_name['index'] ][$subfield_name['key']] = $row['field_value'];
		}

		return $input_groups;
	}

	public static function parse_relationship_field($raw_value = '', $type = '') {
		if ($raw_value && is_array($raw_value)) {
			$value = array();
			foreach ($raw_value as $raw_value_item) {
				if (is_string($raw_value_item) && strpos($raw_value_item, ':') !== false) {
					$item_data = explode(':', $raw_value_item);
					$item = array(
						'id' => $item_data[2],
						'type' => $item_data[0],
					);

					if ($item_data[0] === 'post') {
						$item['post_type'] = $item_data[1];
					} elseif ($item_data[0] === 'term') {
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

	public static function maybe_old_relationship_field($value) {
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

	public static function ksort_recursive( &$array, $sort_flags = SORT_REGULAR ) {
		if (!is_array($array)) {
			return false;
		}

		ksort($array, $sort_flags);
		foreach ($array as $key => $value) {
			self::ksort_recursive($array[$key], $sort_flags);
		}

		return true;
	}

}