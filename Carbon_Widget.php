<?php

abstract class Carbon_Widget extends WP_Widget implements Carbon_DataStore {
	static $registered_widget_ids = array();
	
	protected $print_wrappers = true;
	protected $store_data;
	protected $form_options = array('width' => 295);
	protected $custom_fields = array();
	protected $complex_field_names = array();

	function setup($title, $description, $fields, $classname = '') {
		// require title
		if ( !$title ) {
			throw new Carbon_Exception('Enter widget title');
		}

		// add custom fields
		$this->add_fields($fields);

		# Generate Widget ID
		$widget_ID = 'carbon_' . preg_replace('~\s+~', '_', strtolower(trim(preg_replace('/[^a-zA-Z0-9]+/u', '', remove_accents($title)))));

		# Generate Classes
		if ( !is_array($classname) ) {
			$classname = (array)$classname;
		}
		$classname[] = $widget_ID;
		$classname = implode(' ', $classname);

		$widget_options = compact('description', 'classname', 'widget_ID');

		$this->verify_unique_widget_id($widget_ID);

		$this->WP_Widget($widget_ID, $title, $widget_options, $this->form_options);
	}

	function update($new_instance, $old_instance) {
		$instance = $old_instance;

		$this->store_data =& $instance;

		foreach ($this->custom_fields as $field) {
			$field->set_value_from_input($new_instance);
			$field->save();
		}
		
		return $instance;
	}
 
	function form($instance) {
		$this->store_data = $instance;
		$custom_fields = array();

		foreach ($this->custom_fields as $field) {
			$tmp_field = clone $field;
			$tmp_field->load();

			$field_id = $this->get_field_id($tmp_field->get_name());
			$field_name = $this->get_field_name($tmp_field->get_name());
			$tmp_field->set_name($field_name);

			$custom_fields[] = $tmp_field;
		}

		Carbon_Container::factory('widget', $this->id)
			->add_fields($custom_fields)
			->init();
	}
	
	function widget($args, $instance) {
		// prepare $instance values
		if ( !empty($this->complex_field_names) ) {
			$instance = self::unwrap_complex_field_values($instance, $this->complex_field_names);
		}

		// output
		if ($this->print_wrappers) {
			echo $args['before_widget'];
		}

		$this->front_end($args, $instance);

		if ($this->print_wrappers) {
			echo $args['after_widget'];
		}
	}
	
	function front_end($args, $instance) { }

	function add_fields($fields) {
		foreach ($fields as $field) {
			if ( !is_a($field, 'Carbon_Field') ) {
				throw new Carbon_Exception('Object must be of type Carbon_Field');
			}

			$this->verify_unique_field_name($field->get_name());

			$field->set_prefix('');

			if ( !$field->get_datastore() ) {
				$field->set_datastore($this);
			}

			if ( is_a($field, 'Carbon_Field_Complex') ) {
				$this->complex_field_names[] = $field->get_name();
			}
		}

		$this->custom_fields = array_merge($this->custom_fields, $fields);
	}

	function verify_unique_field_name($name) {
		static $registered_field_names = array();

		if ( in_array($name, $registered_field_names) ) {
			throw new Carbon_Exception ('Field name "' . $name . '" already registered');
		}

		$registered_field_names[] = $name;
	}

	function verify_unique_widget_id($id) {
		if ( in_array($id, self::$registered_widget_ids) ) {
			throw new Carbon_Exception ('Widget with ID "' . $id .'" already registered. Please change the widget title');
		}

		self::$registered_widget_ids[] = $id;
	}

	/* Implement DataStore */
	function load(Carbon_Field $field) {
		if ( isset($this->store_data[$field->get_name()]) ) {
			$field->set_value($this->store_data[$field->get_name()]);
		} else {
			$field->set_value($field->get_default_value());
		}
	}

	function save(Carbon_Field $field) {
		$this->store_data[$field->get_name()] = $field->get_value();
	}
	
	function delete(Carbon_Field $field) {
		if ( isset($this->store_data[$field->get_name()]) ) {
			unset($this->store_data[$field->get_name()]);
		}
	}
	
	function load_values($field) {
		$field_name = $field->get_name();
		$result = array();

		foreach ($this->store_data as $key => $value) {
			if ( strpos($key, $field_name) === 0 ) {
				$result[] = array(
					'field_key' => $key,
					'field_value' => $value
				);
			}
		}

		return $result;
	}
	
	function delete_values(Carbon_Field $field) {
		$field_name = $field->get_name();

		foreach ($this->store_data as $key => $value) {
			if ( strpos($key, $field_name) === 0 ) {
				unset($this->store_data[$key]);
			}
		}
	}

	static function unwrap_complex_field_values($instance, $complex_field_names) {
		foreach ($complex_field_names as $name) {
			foreach ($instance as $key => $value) {
				if ( !preg_match('~^' . preg_quote($name, '~') . '(?P<group>\w*)-_?(?P<key>.*?)_(?P<index>\d+)_?(?P<sub>\w+)?(-(?P<trailing>.*))?$~', $key, $field_name) ) {
						continue;
				}
				
				$value = maybe_unserialize($value);

				$instance[$name][ $field_name['index'] ]['_type'] = $field_name['group'];
				if ( !empty($field_name['trailing']) ) {
					if ( !preg_match('~^' . preg_quote($field_name['key'], '~') . '(?P<group>\w*)-_?(?P<key>.*)_(?P<index>\d+)_?(?P<sub>\w+)?$~', $field_name['key'] . '_' . $field_name['sub'] . '-' . $field_name['trailing'], $subfield_name) ) {
						continue;
					}

					$instance[$name][ $field_name['index'] ][$field_name['key']][ $subfield_name['index'] ]['_type'] = $subfield_name['group'];
					if ( !empty($subfield_name['sub']) ) {
						$instance[$name][ $field_name['index'] ][$field_name['key']][ $subfield_name['index'] ][$subfield_name['key']][$subfield_name['sub']] = $value;
					} else {
						$instance[$name][ $field_name['index'] ][$field_name['key']][ $subfield_name['index'] ][$subfield_name['key']] = $value;
					}
				} else if ( !empty($field_name['sub']) ) {
					$instance[$name][ $field_name['index'] ][ $field_name['key'] ][$field_name['sub'] ] = $value;
				} else {
					$instance[$name][ $field_name['index'] ][ $field_name['key'] ] = $value;
				}

				unset($instance[$key]);
			}
		}

		return $instance;
	}
}
