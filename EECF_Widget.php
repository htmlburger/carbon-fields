<?php

abstract class EECF_Widget extends WP_Widget implements EECF_DataStore {
	protected $print_wrappers = true;
	protected $store_data;
	protected $form_options = array();

	function setup($title, $description, $fields) {
		// require title
		if ( !$title ) {
			throw new EECF_Exception('Enter widget title');
		}

		// check fields and alter prefix
		foreach ($fields as $field) {
			if ( !is_a($field, 'EECF_Field') ) {
				throw new EECF_Exception('Object must be of type EECF_Field');
			}

			$field->set_prefix('');
			$field->set_datastore($this);
		}
		$this->custom_fields = $fields;

		// populate options
		$classname = 'eecf_' . preg_replace('~\s+~', '_', strtolower(trim($title)));
		$widget_options = compact('description', 'classname');

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
		if (empty($this->custom_fields)) {
			echo 'No options are available for this widget';
			return;
		}

		$this->store_data = $instance;

		foreach ($this->custom_fields as $field): 
			$tmp_field = clone $field;
			$tmp_field->load();

			$field_id = $this->get_field_id($tmp_field->get_name());
			$field_name = $this->get_field_name($tmp_field->get_name());
			$tmp_field->set_name($field_name);
		?>
			<div>
				<label for="<?php echo $field_id; ?>"><?php echo $tmp_field->get_label(); ?>:</label>
				<div class="eecf-field" data-type="<?php echo $tmp_field->type ?>">
					<?php $tmp_field->render(); ?>
				</div>
			</div>
		<?php endforeach; ?>
		<?php
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

    /* Implment DataStore */
	function load(EECF_Field $field) {
		if ( isset($this->store_data[$field->get_name()]) ) {
			$field->set_value($this->store_data[$field->get_name()]);
		}
	}

	function save(EECF_Field $field) {
		$this->store_data[$field->get_name()] = $field->get_value();
	}
	
	function delete(EECF_Field $field) {
		if ( isset($this->store_data[$field->get_name()]) ) {
			unset($this->store_data[$field->get_name()]);
		}
	}
	
	function load_values(EECF_Field $field) {
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
	
	function delete_values(EECF_Field $field) {
		$field_name = $field->get_name();

		foreach ($this->store_data as $key => $value) {
			if ( strpos($key, $field_name) === 0 ) {
				unset($this->store_data[$key]);
			}
		}
	}
}

