<?php

class EECF_Widget extends WP_Widget implements EECF_DataStore {
	static protected $registered_widgets = array();
	protected $print_wrappers = true;
	protected $store_data;

	function EECF_Widget($options) {
		// widget id, widget display title, widget options
		$this->WP_Widget($options['widget_options']['classname'], $options['title'], $options['widget_options'], array(
			//'width' => 350,
		));

		$this->custom_fields = $options['fields'];
	}

	function update($new_instance, $old_instance) {
		$instance = $old_instance;

		foreach ($this->custom_fields as $field) {
			$field->set_value_from_input($new_instance);
			$instance[$field->get_name()] = $field->get_value();
		}
		
		return $instance;
	}
 
	function form($instance) {
		if (empty($this->custom_fields)) {
			echo 'No options are available for this widget';
			return;
		}

		$this->store_data = $instance;
		// echo "<pre>";
		// print_r( $this->store_data );
		// exit();

		foreach ($this->custom_fields as $field): 
			$tmp_field = clone $field;
			$tmp_field->set_datastore($this);
			$tmp_field->load();

			if ( 0 & is_a($tmp_field, 'EECF_Field_Repeater') ) {
				echo "<pre>";
				print_r( $tmp_field->get_values() );
				// $tmp_field->set_value_from_input($instance);
				// print_r( $tmp_field->get_values() );
				exit();
			}

			$field_id = $this->get_field_id($tmp_field->get_name());
			$field_name = $this->get_field_name($tmp_field->get_name());
			$tmp_field->set_name($field_name);
		?>
			<p>
				<label for="<?php echo $field_id; ?>"><?php echo $tmp_field->get_label(); ?>:</label>
				<?php $tmp_field->render(); ?>
			</p>
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
	function init() {

	}

	function load(EECF_Field $field) {
		if ( isset($this->store_data[$field->get_name()]) ) {
			$field->set_value($this->store_data[$field->get_name()]);
		}
	}
	
	function save(EECF_Field $field) {

	}
	
	function delete(EECF_Field $field) {

	}
	
	function load_values(EECF_Field $field) {

	}
	
	function delete_values(EECF_Field $field) {

	}
	


    /* Act as factory */
	static public function factory($title, $description, $callback, $fields) {
		// require title
		if ( !$title ) {
			throw new EECF_Exception('Enter widget title');
		}

		// require valid callback
		if ( !function_exists($callback) ) {
			throw new EECF_Exception('Widget callback must be a function');
		} else if ( isset(self::$registered_widgets[$callback]) ) {
			throw new EECF_Exception('Widget callback already registered');
		}

		// check fields and alter prefix
		foreach ($fields as $field) {
			if ( !is_a($field, 'EECF_Field') ) {
				throw new EECF_Exception('Object must be of type EECF_Field');
			}

			$field->set_prefix('');
		}

		// populate options
		$classname = 'eecf_' . preg_replace('~\s+~', '_', strtolower(trim($title)));
		$widget_options = compact('description', 'classname');

		self::$registered_widgets[$callback] = compact('title', 'callback', 'widget_options', 'fields');
	}

	static public function widgets_init() {
		foreach (self::$registered_widgets as $widget_options) {
			eecf_register_widget('EECF_Widget', $widget_options);
		}
	}
}


/* Widget Factory */

class EECF_WP_Widget_Factory extends WP_Widget_Factory {
	private static $instance = NULL;

	function register($widget_class, $params = null) {
		$key = $widget_class;

		if ( !empty($params) ) {
			$key .= '_' . $params['callback'];
		}

		$this->widgets[$key] = new $widget_class($params);
	}

	public static function get_instance() {
		if ( !self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}
}

function eecf_register_widget( $widget_class, $params ) {
	global $wp_widget_factory;
	$wp_widget_factory->register( $widget_class, $params );
}

function eecf_widget_factory_load() {
	$GLOBALS['wp_widget_factory'] = EECF_WP_Widget_Factory::get_instance();
}

add_action('setup_theme', 'eecf_widget_factory_load', 0, 0);
add_action('widgets_init', array('EECF_Widget', 'widgets_init'));


