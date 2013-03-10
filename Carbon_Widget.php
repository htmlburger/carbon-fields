<?php

abstract class Carbon_Widget extends WP_Widget implements Carbon_DataStore {
	static $registered_widget_ids = array();
	
	protected $print_wrappers = true;
	protected $store_data;
	protected $form_options = array();
	protected $custom_fields = array();

	function setup($title, $description, $fields) {
		// require title
		if ( !$title ) {
			throw new Carbon_Exception('Enter widget title');
		}

		// add custom fields
		$this->add_fields($fields);

		// populate options
		$classname = 'carbon_' . preg_replace('~\s+~', '_', strtolower(trim($title)));
		$widget_options = compact('description', 'classname');

		$this->verify_unique_widget_id($classname);

		$this->WP_Widget($classname, $title, $widget_options, $this->form_options);
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
		$container_tag_class_name = get_class($this);
		$container_type = 'Widget';
		$container_options = array();

		include dirname(__FILE__) . '/admin-templates/container-widget.php';
	}
	
	function widget($args, $instance) {
        extract($args);

        if ($this->print_wrappers) {
        	echo $before_widget;
        }

        $this->front_end($args, $instance);

        if ($this->print_wrappers) {
        	echo $after_widget;
        }
    }
    
    function front_end($args, $instance) {
    	echo '<code><pre>';
    	print_r($instance);
    	echo '</pre></code>';
    }

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

    /* Implment DataStore */
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
}

